import { Module } from '@nestjs/common';

import { AccountModule } from '../models/account/account.module';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AccountModule, JwtModule],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}