import { Entity, Column, PrimaryGeneratedColumn, JoinTable, OneToMany } from 'typeorm';
import { AuthorInBooksEntity } from 'src/entities/authorInBooks.entity';
@Entity('author')
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => AuthorInBooksEntity, authorInBook => authorInBook.authorEntity)
  @JoinTable()
  authorInBooks!: AuthorInBooksEntity[];
}