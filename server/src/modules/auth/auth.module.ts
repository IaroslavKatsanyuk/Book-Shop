import { Module } from '@nestjs/common';


import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { userProviders } from 'src/repositories/user.repository';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [
    CoreModule,
  ],
  providers: [AuthService, JwtStrategy, ...userProviders],
  exports: [AuthService],
})
export class AuthModule { }