import { Controller, Get, Body, Post } from '@nestjs/common';
import { AuthorInBookService } from 'src/modules/author-in-book/authorInBook.service';
import { AuthorInBookModel } from 'src/models/author-in-book/authorInBook.model';
import { AllBookModel } from 'src/models/author-in-book/allBook.model';




@Controller()
export class AuthorInBookController {
    constructor(
        private readonly authorInBookService: AuthorInBookService,
    ) { }

    @Post('searchauthor')
    async searchauthor(@Body() authorInBookModel: AuthorInBookModel) {
        return this.authorInBookService.searchauthor(authorInBookModel);
    }


    @Post('allbook')
    async allbook(@Body() allBookModel: AllBookModel) {
        return this.authorInBookService.allbook(allBookModel);
    }
}