import { Module } from '@nestjs/common';
import { CoreModule } from 'src/modules/core/core.module';
import { AuthService } from 'src/modules/auth/auth.service';
import { JwtStrategy } from 'src/modules/auth/jwt.strategy';
import { userProviders } from 'src/repositories/user.repository';



@Module({
  imports: [
    CoreModule,
  ],
  providers: [AuthService, JwtStrategy, ...userProviders],
  exports: [AuthService],
})
export class AuthModule { }