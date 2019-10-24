import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Author')
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}