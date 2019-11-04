import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1572880728032 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `printingEdition` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` int NOT NULL, `isRemoved` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, `currency` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `authorInBook` (`id` int NOT NULL AUTO_INCREMENT, `date` datetime NOT NULL, `printingEditionId` int NULL, `authorId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `refreshToken` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD CONSTRAINT `FK_36132b2ec7290f0c22dc297e582` FOREIGN KEY (`printingEditionId`) REFERENCES `printingEdition`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD CONSTRAINT `FK_4e5419df1a92919907315844f0b` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `authorInBook` DROP FOREIGN KEY `FK_4e5419df1a92919907315844f0b`", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP FOREIGN KEY `FK_36132b2ec7290f0c22dc297e582`", undefined);
        await queryRunner.query("DROP TABLE `users`", undefined);
        await queryRunner.query("DROP TABLE `author`", undefined);
        await queryRunner.query("DROP TABLE `authorInBook`", undefined);
        await queryRunner.query("DROP TABLE `printingEdition`", undefined);
    }

}
