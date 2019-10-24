import { Connection } from 'typeorm';
import { PrintingEditionsEntity } from 'src/entities/printingEditions.entity';

export const printingProviders = [
  {
    provide: 'PrintingRepository',
    useFactory: (connection: Connection) => connection.getRepository(PrintingEditionsEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];