import { UserEntity } from "../entities/user.entity";
import { createConnection } from "typeorm";
import { AuthorEntity } from "src/entities/author.entity";
import { AuthorInBooksEntity } from "src/entities/authorInBooks.entity";
import { PrintingEditionsEntity } from "src/entities/printingEditions.entity";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'BookShopUser',
            password: 'Ukraine1990',
            database: 'my-db',
            entities: [UserEntity, PrintingEditionsEntity, AuthorEntity, AuthorInBooksEntity],
            synchronize: false,
        }),
    }]