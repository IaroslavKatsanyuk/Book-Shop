import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from "./services/account.service";
import { AccountController } from './controllers/account.controller';
import { Database } from './account/connectionDatabase'
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './modules/account/account.module';

const env = new Database();

@Module({    
    imports: [
      AccountService,
      AuthModule, 
      AccountModule,
      TypeOrmModule.forRoot(env.typeormModuleOptions)],
    controllers: [AccountController],
    providers: [AccountService],
})
export class AppModule {}
