import { Module } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';



@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService],
  exports: [TypeOrmModule, AuthService],
})
export class AccountModule {}