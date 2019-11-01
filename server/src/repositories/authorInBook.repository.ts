import { Connection } from 'typeorm';
import { AuthorInBooksEntity } from 'src/entities/authorInBooks.entity';

export const authorInBookProviders = [
  {
    provide: 'authorInBookRepository',
    useFactory: (connection: Connection) => connection.getRepository(AuthorInBooksEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];