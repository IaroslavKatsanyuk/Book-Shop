import { Module } from '@nestjs/common';

import { AccountModule } from '../modules/account/account.module';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/secrets/jwt.constants';
import { AccountService } from 'src/services/account.service';

@Module({
  imports: [
    AccountModule,  
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' }
    })
  ],
  providers: [AuthService, JwtStrategy, AccountService],
  exports: [AuthService, AccountService],
})
export class AuthModule {}