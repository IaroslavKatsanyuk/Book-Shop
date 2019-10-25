import { createConnection } from "typeorm";


export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection().then(async conn =>{
            await conn.runMigrations();
        })
    }]