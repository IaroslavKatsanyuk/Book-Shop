import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { PrintingEditionsEntity } from './printingEditions.entity';

@Entity('author')
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => PrintingEditionsEntity)
  @JoinTable({name :'authorInBook'})
  printingEditionsEntity: PrintingEditionsEntity[];
}