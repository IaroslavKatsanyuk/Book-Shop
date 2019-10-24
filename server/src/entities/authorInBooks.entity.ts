import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';
import { AuthorEntity } from './author.entity';
import { PrintingEditionsEntity } from './printingEditions.entity';

@Entity('AuthorInBook')
export class AuthorInBooksEntity {
  @PrimaryGeneratedColumn()
  authorId: number;

  @Column()
  printingEditionId: number;

  @Column()
  date: Date;

  @ManyToMany(type => AuthorEntity)
  @JoinTable()
  authorEntity: AuthorEntity[];
  @ManyToMany(type => PrintingEditionsEntity)
  @JoinTable()
  printingEditionsEntity: PrintingEditionsEntity[];
}