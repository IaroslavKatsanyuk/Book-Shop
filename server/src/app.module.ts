import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './controllers/account.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UserEntity } from './entities/user.entity';
import { PrintingEditionsModule } from './modules/printing-editions/printingEditions.module';
import { AuthorModule } from './modules/author/author.module';

@Module({
  imports: [
    AuthModule,
    // PrintingEditionsModule,
    // AuthorModule,
    TypeOrmModule,
  ],
  controllers: [AccountController],
  providers: [],
})
export class AppModule { }
