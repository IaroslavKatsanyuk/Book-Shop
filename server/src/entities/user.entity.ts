import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Entity('users')
export class UserEntity  {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'varchar'})
  FirstName: string;

  @Column({ type: 'varchar'})
  LastName: string;

  @Column({ type: 'varchar'})
  Email: string;

  @BeforeInsert()
  async hashPassword(){
    this.Password = await bcrypt.hash(this.Password, 10)
  }

  @Column({ type: 'varchar'})
  Password: string;
}