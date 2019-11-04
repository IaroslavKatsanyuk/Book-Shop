import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { PrintingEditionsModule } from 'src/modules/printing-editions/printingEditions.module';
import { AuthorModule } from 'src/modules/author/author.module';
import { AuthorInBookModule } from 'src/modules/author-in-book/authorInBook.modules';
import { AccountController } from 'src/controllers/account.controller';

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
