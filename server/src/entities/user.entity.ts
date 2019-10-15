import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column('text')
  FirstName: string;

  @Column('text')
  LastName: string;

  @Column('text')
  Email: string;

  @Column('text')
  PasswordHash: string;

  @BeforeInsert()
  async hashPassword(){
    this.PasswordHash = await bcrypt.hash(this.PasswordHash, 10)
  }
}