import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountModel } from '../models/account/accountModel';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [AccountModel, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
