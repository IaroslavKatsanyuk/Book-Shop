
import { Connection } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';

export const userProviders = [
  {
    provide: 'UserRepository',
    useFactory: (connection: Connection) => connection.getRepository(UserEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];