import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Entity('users')
export class UserEntity  {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar'})
  firstName: string;

  @Column({ type: 'varchar'})
  lastName: string;

  @Column({ type: 'varchar'})
  email: string;

  @BeforeInsert()
  async hashPassword(){
    this.password = await bcrypt.hash(this.password, 10)
  }

  @Column({ type: 'varchar'})
  password: string;
}