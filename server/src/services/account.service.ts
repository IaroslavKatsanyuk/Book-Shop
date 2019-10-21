import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { Repository, InsertResult } from 'typeorm';
import { RegisterModel } from 'src/models/account/register.model';
import { AuthService } from 'src/auth/auth.service';



@Injectable()
export class AccountService {
  private readonly users: any[];
  constructor(
    @Inject(UserEntity)
    private readonly userRepository: Repository<UserEntity>,    
    private readonly accountService: AccountService,
    private readonly authService: AuthService,
  ) { }

  async register(user: RegisterModel): Promise<any> {
    const validateUser = await this.authService.validateUser(RegisterModel);
    const userToRegister: UserEntity = new UserEntity();
    userToRegister.email = user.email;
    if (!validateUser) {
      const reg = await this.accountService.create(userToRegister);
    }
    return null;
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async create(userToInsert: UserEntity): Promise<InsertResult> {
    return await this.userRepository.insert(userToInsert);
  }

  async findOne(email: string): Promise<any> {
    return this.users.find(user => user.email === email);
  }

}

