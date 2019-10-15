import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from "./services/AccountService";
import { AccountController } from './controllers/account.controller';
import { Database } from './account/creationDatabase'

const env = new Database();

@Module({
  imports: [TypeOrmModule.forRoot(env.typeormModuleOptions)],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AppModule { }
