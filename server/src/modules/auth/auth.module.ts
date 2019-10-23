import { Module } from '@nestjs/common';


import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/secrets/jwt.constants';
import { userProviders } from 'src/repositories/user.repository';
import { databaseProviders } from 'src/repositories/connectionDatabase';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [AuthService, JwtStrategy, ...userProviders, ...databaseProviders],
  exports: [AuthService],
})
export class AuthModule { }