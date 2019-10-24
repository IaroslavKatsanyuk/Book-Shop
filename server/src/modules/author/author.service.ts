import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthorEntity } from 'src/entities/author.entity';
import { AuthorModel } from 'src/models/author/author.model';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AuthorProvidersRepository')
    private readonly authorProvidersRepository: Repository<AuthorEntity>,
  ) { }
    async validateRegistAuthor (authorModel: any){
      const name = await this.authorProvidersRepository.findOne({ where: { name: authorModel.name } });
      if (name != undefined) {
        return name;
      }
      return null;
    }
  
      async authorRegist (authorModel: any){
          const validateAuthor = await this.validateRegistAuthor(authorModel);
      if (!validateAuthor) {
          const authorToRegister: AuthorEntity = new AuthorEntity();
          authorToRegister.name = authorModel.name;
          return this.authorProvidersRepository.insert(authorToRegister);
        }
        return null;
      }
}
    



