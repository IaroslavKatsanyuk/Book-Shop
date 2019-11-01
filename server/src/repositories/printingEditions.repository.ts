import { Connection } from 'typeorm';
import { PrintingEditionsEntity } from 'src/entities/printingEditions.entity';

export const printingProviders = [
  {
    provide: 'printingRepository',
    useFactory: (connection: Connection) => connection.getRepository(PrintingEditionsEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];