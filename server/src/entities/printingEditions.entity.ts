import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

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
}