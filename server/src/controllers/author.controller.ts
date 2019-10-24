import { Controller, Get, Body, Post } from '@nestjs/common';
import { AuthorModel } from 'src/models/author/author.model';
import { AuthorService } from 'src/modules/author/author.service';




@Controller()
export class AuthorController {
  constructor(
    private readonly authorService: AuthorService,
  ) { }

  @Post ('authorregist') 
  async authorRegist(@Body() authorModel: AuthorModel ) {
    return this.authorService.authorRegist(authorModel);
  }
}