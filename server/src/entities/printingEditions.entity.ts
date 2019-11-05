import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import { AuthorInBooksEntity } from 'src/entities/authorInBooks.entity';

@Entity('printingEdition')
export class PrintingEditionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isRemoved: string;

  @Column()
  status: string;

  @Column()
  currency: string;

  @Column()
  type: string;

  @OneToMany(type => AuthorInBooksEntity, authorInBook => authorInBook.printingEditionsEntity)
  @JoinTable()
  authorInBooks!: AuthorInBooksEntity[];
}