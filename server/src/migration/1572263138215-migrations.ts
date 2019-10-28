import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations1572263138215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `printingEdition` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` int NOT NULL, `isRemoved` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, `currency` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `authorInBook` (`authorId` int NOT NULL AUTO_INCREMENT, `printingEditionId` int NOT NULL, `date` datetime NOT NULL, PRIMARY KEY (`authorId`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP COLUMN `date`", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD `date` datetime NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD PRIMARY KEY (`authorId`, `printingEditionId`)", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD PRIMARY KEY (`authorId`)", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP COLUMN `authorId`", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD `authorId` int NOT NULL PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD PRIMARY KEY (`authorId`, `printingEditionId`)", undefined);
        await queryRunner.query("CREATE INDEX `IDX_4e5419df1a92919907315844f0` ON `authorInBook` (`authorId`)", undefined);
        await queryRunner.query("CREATE INDEX `IDX_36132b2ec7290f0c22dc297e58` ON `authorInBook` (`printingEditionId`)", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD CONSTRAINT `FK_4e5419df1a92919907315844f0b` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD CONSTRAINT `FK_36132b2ec7290f0c22dc297e582` FOREIGN KEY (`printingEditionId`) REFERENCES `printingEdition`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `authorInBook` DROP FOREIGN KEY `FK_36132b2ec7290f0c22dc297e582`", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP FOREIGN KEY `FK_4e5419df1a92919907315844f0b`", undefined);
        await queryRunner.query("DROP INDEX `IDX_36132b2ec7290f0c22dc297e58` ON `authorInBook`", undefined);
        await queryRunner.query("DROP INDEX `IDX_4e5419df1a92919907315844f0` ON `authorInBook`", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD PRIMARY KEY (`authorId`)", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP COLUMN `authorId`", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD `authorId` int NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD PRIMARY KEY (`authorId`)", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD PRIMARY KEY (`authorId`, `printingEditionId`)", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD PRIMARY KEY (`authorId`)", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` CHANGE `authorId` `authorId` int NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` DROP COLUMN `date`", undefined);
        await queryRunner.query("ALTER TABLE `authorInBook` ADD `date` datetime NOT NULL", undefined);
        await queryRunner.query("DROP TABLE `users`", undefined);
        await queryRunner.query("DROP TABLE `authorInBook`", undefined);
        await queryRunner.query("DROP TABLE `author`", undefined);
        await queryRunner.query("DROP TABLE `printingEdition`", undefined);
    }

}
