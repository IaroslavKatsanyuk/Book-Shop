import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { AuthorEntity } from './author.entity';
import { PrintingEditionsEntity } from './printingEditions.entity';

@Entity('authorInBook')
export class AuthorInBooksEntity {
  @PrimaryColumn()
  authorId: number;

  @PrimaryColumn()
  printingEditionId: number;

  @Column()
  date: Date;
}