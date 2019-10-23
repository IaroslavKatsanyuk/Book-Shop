import { UserEntity } from "../entities/user.entity";
import { createConnection } from "typeorm";

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
            entities: [UserEntity],
            synchronize: true,
        }),
    }]