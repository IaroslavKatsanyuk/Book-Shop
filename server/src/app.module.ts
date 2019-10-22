import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './controllers/account.controller';
import { Database } from './account/connectionDatabase'
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './modules/account/account.module';
import { UserEntity } from './entities/user.entity';
import { AuthService } from './auth/auth.service';

const env = new Database();

@Module({    
    imports: [
      UserEntity,
      AuthModule, 
      AccountModule,
      TypeOrmModule.forRoot(env.typeormModuleOptions)],
    controllers: [AccountController],
    providers: [AuthService],
})
export class AppModule {}
