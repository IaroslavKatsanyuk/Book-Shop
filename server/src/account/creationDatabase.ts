import { Users } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

@Injectable()
export class Database {
    typeormModuleOptions: TypeOrmModuleOptions;

    constructor() {
        this.typeormModuleOptions = {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'BookShopUser',
            password: 'Ukraine1990',
            database: 'my-db',
            entities: [Users],
            synchronize: true,
        };
    }
}