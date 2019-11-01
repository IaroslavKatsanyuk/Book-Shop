import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthorEntity } from 'src/entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('authorRepository')
    private readonly authorRepository: Repository<AuthorEntity>,
  ) { }
  async validateRegistAuthor(authorModel: any) {
    const name = await this.authorRepository.findOne({ where: { name: authorModel.name } });
    if (!name) {
      return name;
    }
    return null;
  }

  async authorRegist(authorModel: any) {
    const validateAuthor = await this.validateRegistAuthor(authorModel);
    if (!validateAuthor) {
      const authorToRegister: AuthorEntity = new AuthorEntity();
      authorToRegister.name = authorModel.name;
      return this.authorRepository.insert(authorToRegister);
    }
    return null;
  }
}




