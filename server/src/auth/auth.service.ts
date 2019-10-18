import { Injectable } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterModel } from 'src/models/account/register.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService
  ) { }

  async register(user: any): Promise<any> {
    const userFromDB = await this.validateUser(user);
    if (!userFromDB) {
     const reg = await this.accountService.createConnection(RegisterModel);
    }
    return null;
  }

  async validateUser(LoginModel: any): Promise<any> {
    const user = await this.accountService.findOne(LoginModel.email);
    const paswordIsCorrect: boolean = await this.passwordsAreEqual(user.password, LoginModel.password)
    if (user && paswordIsCorrect) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const userFromDB =  await this.validateUser(user);
    if(!userFromDB){
      return null;
    }
    const payload = { email: userFromDB.email, id: userFromDB.id };
    return {
      access_tokne: this.jwtService.sign(payload)
    };
  }

  async passwordsAreEqual(
    hashedPassword: string,
    plainPassword: string
  ): Promise<boolean> {
    return await new Promise((resolve, reject) => bcrypt.compare(plainPassword, hashedPassword,(error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    }));
  }
}