import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { AuthorInBooksEntity } from './authorInBooks.entity';
import { AuthorEntity } from './author.entity';

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


  @ManyToMany(() => AuthorEntity, ab => ab.id)
  @JoinTable({
    name: "AuthorEntity"
  })
  authorInBookEntity: AuthorInBooksEntity[];
}