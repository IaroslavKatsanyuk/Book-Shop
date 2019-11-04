import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { PrintingEditionsEntity } from 'src/entities/printingEditions.entity';
import { AuthorEntity } from 'src/entities/author.entity';

@Entity('authorInBook')
export class AuthorInBooksEntity {

  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(() => PrintingEditionsEntity, printingEditionsEntity => printingEditionsEntity.authorInBooks)
  @JoinColumn({
    name: 'printingEditionId',
    referencedColumnName: 'id',
  })
  printingEditionsEntity: number;


  @RelationId((authorInBooks: AuthorInBooksEntity) => authorInBooks.printingEditionsEntity)
  printingEditionId: number;


  @ManyToOne(() => AuthorEntity, authorEntity => authorEntity.authorInBooks)
  @JoinColumn({
    name: 'authorId',
    referencedColumnName: 'id',
  })
  authorEntity: AuthorEntity;


  @RelationId((authorInBooks: AuthorInBooksEntity) => authorInBooks.authorEntity)
  authorId: number;



  @Column()
  date: Date;
}