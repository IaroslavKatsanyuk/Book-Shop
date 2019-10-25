import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { type } from 'os';
import { AuthorInBooksEntity } from './authorInBooks.entity';
import { PrintingEditionsEntity } from './printingEditions.entity';

@Entity('author')
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => PrintingEditionsEntity)
  @JoinTable()
  printingEditionsEntity: PrintingEditionsEntity[];
}