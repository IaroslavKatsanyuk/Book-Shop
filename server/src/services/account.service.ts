import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';

export type User = any;

@Injectable()
export class AccountService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        Id: "1",
        FirstName: 'john',
        LastName: 'Smit',
        Email: 'smitJohn@gmail.com',
        Password: 'changeme',
      },
      {
        Id: "2",
        FirstName: 'chris',
        LastName: 'Smit',
        Email: 'smitChris@gmail.com',
        Password: 'secret',
      },
      {
        Id: "3",
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
  async findOne(FirstName: string, LastName: string): Promise<User | undefined> {
    return this.users.find(user => user.FirstName === FirstName && user.LastName === LastName);
  }
}

