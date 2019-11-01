import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { jwtConstants } from 'src/secrets/jwt.constants';
import { TokenModel } from 'src/models/account/token.model';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async validateRegistuser(registerModel: any): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email: registerModel.email } });
    if (!user) {
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
    throw new UnauthorizedException("refresh registerUser is invalid");
  }



  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async validateLoginUser(loginModel: any): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email: loginModel.email } });
    const paswordIsCorrect: boolean = await this.passwordsAreEqual(user.password, loginModel.password)
    if (user && paswordIsCorrect) {
      return user;
    }
    return null;
  }

  async login(loginModel: any) {
    const userFromDB: UserEntity = await this.validateLoginUser(loginModel);

    if (!userFromDB) {
      throw new UnauthorizedException("refresh user is invalid");
    }

    const payload = { email: userFromDB.email, id: userFromDB.id };
    const expiration = '60s';
    const expirationTwo = '6h';

    const tokenModel: TokenModel = new TokenModel();

    tokenModel.accessSecret = sign(payload, jwtConstants.accessSecret, { expiresIn: expiration });
    tokenModel.refreshSecret = sign(payload, jwtConstants.refreshSecret, { expiresIn: expirationTwo });

    userFromDB.refreshToken = tokenModel.refreshSecret;

    this.userRepository.save(userFromDB);

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

  async validateToken(TokenModel: any): Promise<any> {
    const token = await this.userRepository.findOne({ where: { refreshToken: TokenModel.Token } });
    if (!token) {
      return null;
    }
    return token;
  }


  async refreshtoken(tokenModel: any) {
    const tokenFromDB: UserEntity = await this.validateToken(tokenModel);

    if (!tokenFromDB) {
      throw new UnauthorizedException("refresh token is invalid");
    }
    const payload = { email: tokenFromDB.email, id: tokenFromDB.id };
    const expiration = '60s';
    const expirationTwo = '6h';

    tokenModel.accessSecret = sign(payload, jwtConstants.accessSecret, { expiresIn: expiration });
    tokenModel.refreshSecret = sign(payload, jwtConstants.refreshSecret, { expiresIn: expirationTwo });

    tokenFromDB.refreshToken = tokenModel.refreshSecret;

    const result: UpdateResult = await this.userRepository.update({ id: tokenFromDB.id }, { refreshToken: tokenFromDB.refreshToken });

    return tokenModel;
  }
}