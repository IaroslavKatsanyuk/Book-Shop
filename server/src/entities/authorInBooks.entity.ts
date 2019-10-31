import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authorInBook')
export class AuthorInBooksEntity {
  @PrimaryGeneratedColumn()
  authorId: number;

  @Column()
  printingEditionId: number;

  @Column()
  date: Date;
}