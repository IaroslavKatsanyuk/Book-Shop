import { Connection } from 'typeorm';
import { AuthorEntity } from 'src/entities/author.entity';

export const authorProviders = [
  {
    provide: 'authorRepository',
    useFactory: (connection: Connection) => connection.getRepository(AuthorEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];