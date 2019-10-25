import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1572008969147 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `authorInBook` (`authorId` int NOT NULL AUTO_INCREMENT, `printingEditionId` int NOT NULL, `date` datetime NOT NULL, PRIMARY KEY (`authorId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `printingEdition` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` int NOT NULL, `isRemoved` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, `currency` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `users`", undefined);
        await queryRunner.query("DROP TABLE `printingEdition`", undefined);
        await queryRunner.query("DROP TABLE `authorInBook`", undefined);
        await queryRunner.query("DROP TABLE `author`", undefined);
    }

}
