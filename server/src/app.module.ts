import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './controllers/account.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    UserEntity,
    AuthModule,
    TypeOrmModule,
  ],
  controllers: [AccountController],
  providers: [],
})
export class AppModule { }
