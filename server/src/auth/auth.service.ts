import { Injectable } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
  ) {}

  async validateUser(FirstName: string, LastName: string, pass: string): Promise<any> {
    const user = await this.accountService.findOne(FirstName, LastName);
    if (user && (await this.passwordsAreEqual(user.Password, pass))) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  private async passwordsAreEqual(
    hashedPassword: string,
    plainPassword: string
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}