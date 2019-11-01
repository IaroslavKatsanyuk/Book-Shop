import { AuthorEntity } from "src/entities/author.entity";
import { PrintingEditionsEntity } from "src/entities/printingEditions.entity";
import { ManyToOne, JoinTable } from "typeorm";

export class AuthorInBookModel {
    public printingEditionId: number;
    public authorId: number;
    public date: Date;

    public author: AuthorEntity;
    @ManyToOne(() => AuthorEntity)
    @JoinTable({ name: 'authorInBook' })
    authorEntity: AuthorEntity[];


    public printingEditions: PrintingEditionsEntity

    @ManyToOne(() => PrintingEditionsEntity)
    @JoinTable({ name: 'authorInBook' })
    printingEditionsEntity: PrintingEditionsEntity[];
}