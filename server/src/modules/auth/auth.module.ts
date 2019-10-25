import { Module } from '@nestjs/common';


import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/secrets/jwt.constants';
import { userProviders } from 'src/repositories/user.repository';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [
    CoreModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [AuthService, JwtStrategy, ...userProviders],
  exports: [AuthService],
})
export class AuthModule { }