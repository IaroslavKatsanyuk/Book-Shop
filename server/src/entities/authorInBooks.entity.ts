import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';
import { AuthorEntity } from './author.entity';
import { PrintingEditionsEntity } from './printingEditions.entity';
import { type } from 'os';

@Entity('authorInBook')
export class AuthorInBooksEntity {
  @PrimaryGeneratedColumn()
  authorId: number;

  @Column()
  printingEditionId: number;

  @Column()
  date: Date;   
}