import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { sign, verify } from 'jsonwebtoken';
import { jwtConstants } from 'src/secrets/jwt.constants';
import { RegisterModel } from 'src/models/account/register.model';
import { TokenModel } from 'src/models/account/token.model';
import { LoginModel } from 'src/models/account/login.model';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async validateRegistuser(registerModel: any): Promise<any> {
    const user = await this.userRepository.findOne({ where: (item: UserEntity) => { item.email === registerModel.email } });
    if (user != registerModel) {
      return null;
    }
    return user;
  }

  async register(registerModel: any): Promise<any> {
    const validateUser = await this.validateRegistuser(registerModel);
    if (!validateUser) {
      const userToRegister: UserEntity = new UserEntity();
      userToRegister.firstName = registerModel.firstName;
      userToRegister.lastName = registerModel.lastName;
      userToRegister.email = registerModel.email;
      userToRegister.password = registerModel.password;
      return this.userRepository.insert(userToRegister);
    }
    return null;
    6
  }



  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async validateLoginUser(loginModel: any): Promise<any> {
    const user = await this.userRepository.findOne({ where: (item: UserEntity) => { item.email === loginModel.email } });
    const paswordIsCorrect: boolean = await this.passwordsAreEqual(user.password, loginModel.password)
    if (user && paswordIsCorrect) {
      return user;
    }
    return null;
  }

  async login(loginModel: any) {
    const userFromDB : UserEntity = await this.validateLoginUser(loginModel);

    if (!userFromDB) {
      return null;
    }
    
    const payload = { email: userFromDB.email, id: userFromDB.id };
    const expiration = '60s';
    const expirationTwo = '6h';

    const tokenModel: TokenModel = new TokenModel();

    tokenModel.accessSecret = sign(payload, jwtConstants.accessSecret, { expiresIn: expiration });
    tokenModel.refreshSecret = sign(payload, jwtConstants.refreshSecret, { expiresIn: expirationTwo });

    userFromDB.refreshToken = tokenModel.refreshSecret;

    this.userRepository.update(userFromDB);

    return tokenModel;
  }

  async passwordsAreEqual(
    hashedPassword: string,
    plainPassword: string,
  ): Promise<boolean> {
    return await new Promise((resolve, reject) => bcrypt.compare(plainPassword, hashedPassword, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    }));
  }

  async refreshtoken(tokenModel: any) {
    const user = this.userRepository.findOne({ where: (item: UserEntity) => { item.refreshToken === tokenModel.Token } });
    if (user != tokenModel) {
      return null
    }
    return await new Promise((resolve, reject) => {
      verify(tokenModel.Token, jwtConstants.refreshSecret, (err, payload) => {
        if (err) {
          reject(err);
        }
        this.userRepository.findOne({ email: payload.email }).then(user => {
          const expiration = '60s';
          const expirationTwo = '6h';
          resolve({
            access_token: sign({ email: user.email }, jwtConstants.accessSecret, { expiresIn: expiration }),
            refresh_token: sign({ email: user.email }, jwtConstants.refreshSecret, { expiresIn: expirationTwo })
          });
        });
      });
    })
  }
}