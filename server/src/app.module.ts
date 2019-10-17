import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from "./services/account.service";
import { AccountController } from './controllers/account.controller';
import { Database } from './account/creationDatabase'
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './models/account/account.module';

const env = new Database();

@Module({
    
    imports: [
      AuthModule, 
      AccountModule,
      TypeOrmModule.forRoot(env.typeormModuleOptions),],
    controllers: [AccountController],
    providers: [AccountService],
})
export class AppModule { }
