import { Injectable } from '@nestjs/common';
import { AccountService } from '../services/AccountService';

@Injectable()
export class AuthService {
  constructor(private readonly accountService: AccountService) {}

  async validateUser(FirstName: string, LastName: string, pass: string): Promise<any> {
    const user = await this.accountService.findOne(FirstName, LastName);
    if (user && user.PasswordHash === pass) {
      const { PasswordHash, ...result } = user;
      return result;
    }
    return null;
  }
}