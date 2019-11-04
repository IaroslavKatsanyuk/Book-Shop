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
        if (!authorInBook) {
            const newAuthorInBook: AuthorInBooksEntity = new AuthorInBooksEntity;
            newAuthorInBook.authorId = author.id;
            newAuthorInBook.printingEditionId = book.id;
            newAuthorInBook.date = new Date;
            return this.authorInBookRepository.save(newAuthorInBook);
        }
        return null;
    }


    async bookValid(AllBookModel: any): Promise<any> {
        const authorBook = await this.authorRepository.findOne({ where: { name: AllBookModel.authorName } });
        if (authorBook) {
            return authorBook.id;
        }
        return null;
    }


    async allbook(AllBookModel: any) {
        const authorId: AuthorInBooksEntity = await this.bookValid(AllBookModel);
        if (!authorId) {
            return null;
        }
        const allBooks = await this.authorInBookRepository.find({ where: { authorEntity: authorId } });


        const idBook: PrintingEditionsEntity[] = [];

        allBooks.forEach(async element => {
           let item =  await this.printingRepository.findOne({ where: { id: element.printingEditionId } });
            idBook.push( item);
         
     });
        return idBook;
    }
}   