import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from "./services/account.service";
import { AccountController } from './controllers/account.controller';
import { Database } from './account/creationDatabase'
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './secrets/jwt.constants';

const env = new Database();

@Module({
  imports: [
    TypeOrmModule.forRoot(env.typeormModuleOptions),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' }
    })
  ],
  providers: [AccountService, AuthService, JwtStrategy],
  controllers: [AccountController],
  exports: [PassportModule, AuthService]
})
export class AppModule { }
