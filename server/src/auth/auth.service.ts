import { Injectable } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(Email: string, pass: string): Promise<any> {
    const user = await this.accountService.findOne(Email);
    if (user && user.Password, pass) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {  Email: user.Email, Password: user.Password };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}