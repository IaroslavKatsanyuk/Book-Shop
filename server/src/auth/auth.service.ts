import { Injectable } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(FirstName: string, LastName: string, pass: string): Promise<any> {
    const user = await this.accountService.findOne(FirstName, LastName);
    console.log(user);
    if (user && (await this.passwordsAreEqual(user.Password, pass))) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { FirstName: user.FirstName, LastName: user.LastName, Email: user.Email, Sub: user.Id, Password: user.Password};
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  private async passwordsAreEqual(
    hashedPassword: string,
    plainPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}