import { Module } from '@nestjs/common';
import { AccountService } from 'src/services/account.service';

@Module({
  providers: [AccountService],
  exports: [AccountService]
})
export class AccountModule {}