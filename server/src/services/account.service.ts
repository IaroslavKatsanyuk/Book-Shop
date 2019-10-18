import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createConnection } from 'typeorm';
import { RegisterModel } from 'src/models/account/register.model';

createConnection().then(connection => {

  let users = new UserEntity()
  users.id
  users.firstName = RegisterModel.firstName;
  users.lastName = RegisterModel.lastName;
  users.email = RegisterModel.email;
  users.password = RegisterModel.password;

  return connection.manager
          .save(users)

}).catch(error => console.log(error));

@Injectable()
export class AccountService {
  [x: string]: any;
  private readonly users: any[];
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

    

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<any> {
    return this.users.find(user => user.email === email);
  }
  
}

