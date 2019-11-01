import { Injectable, Inject } from '@nestjs/common';
import { AuthorInBooksEntity } from 'src/entities/authorInBooks.entity';
import { Repository } from 'typeorm';
import { AuthorEntity } from 'src/entities/author.entity';
import { PrintingEditionsEntity } from 'src/entities/printingEditions.entity';

@Injectable()
export class AuthorInBookService {
    constructor(
        @Inject('authorInBookRepository')
        private readonly authorInBookRepository: Repository<AuthorInBooksEntity>,
        @Inject('authorRepository')
        private readonly authorRepository: Repository<AuthorEntity>,
        @Inject('printingRepository')
        private readonly printingRepository: Repository<PrintingEditionsEntity>,
    ) { }

    async authorInBookValid(AuthorInBookModel: any): Promise<any> {
        const authorinBook = await this.authorInBookRepository.findOne({ where: { authorId: AuthorInBookModel.id } });
        if (!authorinBook) {
            return authorinBook;
        }
        return null;
    }

    async searchauthor(AuthorInBookModel: any) {
        const authorInBook: AuthorInBooksEntity = await this.authorInBookValid(AuthorInBookModel);
        const author = await this.authorRepository.findOne({ where: { id: AuthorInBookModel.authorId } });
        const book = await this.printingRepository.findOne({ where: { id: AuthorInBookModel.printingEditionId } });
        this.authorInBookRepository.save([authorInBook]);
        if (!authorInBook) {
            const newAuthorInBook: AuthorInBooksEntity = new AuthorInBooksEntity;
            newAuthorInBook.authorId = author.id;
            newAuthorInBook.printingEditionId = book.id;
            newAuthorInBook.date = new Date;
            return this.authorInBookRepository.save(newAuthorInBook);
        }
        return null;
    }


    // async searchauthor(AuthorInBookModel: any) {
    //     const authorInBookRegister: AuthorInBooksEntity = new AuthorInBooksEntity();
    //     const authorRegister: AuthorEntity = new AuthorEntity();
    //     const BookRegister: PrintingEditionsEntity = new PrintingEditionsEntity();
    //     authorInBookRegister.authorId = authorRegister.id = 1;
    //     authorInBookRegister.printingEditionId = BookRegister.id = 1;
    //     authorInBookRegister.printingEditionId = BookRegister.id = 2;
    //     authorInBookRegister.printingEditionId = BookRegister.id = 3;
    //     authorInBookRegister.authorId = authorRegister.id = 2;
    //     authorInBookRegister.printingEditionId = BookRegister.id = 4;
    //     authorInBookRegister.printingEditionId = BookRegister.id = 5;
    //     authorInBookRegister.date = new Date();
    //     return this.authorInBookRepository.insert(authorInBookRegister);
}