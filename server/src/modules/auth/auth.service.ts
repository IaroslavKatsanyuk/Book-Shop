import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { sign, verify } from 'jsonwebtoken';
import { jwtConstants } from 'src/secrets/jwt.constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async validateRegistuser(registerModel: any): Promise<any> {
    const user = await this.userRepository.findOne({ where: (item: UserEntity) => { item.email === registerModel.email } });
    if (user != undefined) {
      return user;
    }
    return null;
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
    const userFromDB = await this.validateLoginUser(loginModel);
    if (!userFromDB) {
      return null;
    }
    const payload = { email: userFromDB.email, id: userFromDB.id };
    const expiration = '60s';
    const expirationTwo = '6h';
    return {
      access_token: sign(payload, jwtConstants.accessSecret, { expiresIn: expiration }),
      refresh_token: sign(payload, jwtConstants.refreshSecret, { expiresIn: expirationTwo })
    };
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
    return await new Promise((resolve, reject) => {
      verify(tokenModel.Token, jwtConstants.refreshSecret, (err, payload) => {
        if (err) {
          reject(err);
        }
        this.userRepository.findOne({ email: payload.email }).then(user => { resolve(user); });
        
      });
    })
  }
}