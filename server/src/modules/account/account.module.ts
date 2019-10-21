import { Module } from '@nestjs/common';
import { AccountService } from 'src/services/account.service';
import { UserEntity } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [AccountService],
  exports: [TypeOrmModule],
})
export class AccountModule {}