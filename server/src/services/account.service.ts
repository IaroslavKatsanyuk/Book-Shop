import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';


@Injectable()
export class AccountService {
  private readonly users: any[];

  constructor() {
    this.users = [
      {
        Id: '1',
        FirstName: 'john',
        LastName: 'Smit',
        Email: 'smitJohn1@gmail.com',
        Password: 'changeme',
      },
      {
        Id: '2',
        FirstName: 'chris',
        LastName: 'Smit',
        Email: 'smitChris@gmail.com',
        Password: 'secret',
      },
      {
        Id: '3',
        FirstName: 'maria',
        LastName: 'Smit',
        Email: 'smitMaria@gmail.com',
        Password: 'guess',
      },
    ];
  }
  findAll(): Promise<UserEntity[]> {
    return undefined;
  }
  async findOne(Email: string): Promise<any> {
    return this.users.find(user => user.Email === Email);
  }
}

