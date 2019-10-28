import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';

@Entity('authorInBook')
export class AuthorInBooksEntity {
  @PrimaryGeneratedColumn()
  authorId: number;

  @Column()
  printingEditionId: number;

  @Column()
  date: Date;   
}