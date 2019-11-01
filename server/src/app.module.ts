import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './controllers/account.controller';
import { AuthModule } from './modules/auth/auth.module';
import { PrintingEditionsModule } from './modules/printing-editions/printingEditions.module';
import { AuthorModule } from './modules/author/author.module';
import { AuthorInBookModule } from './modules/author-in-book/authorInBook.modules';

@Module({
  imports: [   
    AuthModule,
    PrintingEditionsModule,
    AuthorModule,
    AuthorInBookModule,
    TypeOrmModule, 
  ],
  controllers: [AccountController],
  providers: [],
})
export class AppModule { }
