import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PrintingEdition')
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