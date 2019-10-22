import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterModel } from 'src/models/account/register.model';
import { UserEntity } from 'src/entities/user.entity';
import { Repository, InsertResult } from 'typeorm';

@Injectable()
export class AuthService {
  private readonly jwtService: JwtService;
  private readonly authService: AuthService;
  private readonly userRepository: Repository<UserEntity>;
  constructor(
  ) { }

    
  async register(user: RegisterModel): Promise<any> {
    const validateUser = await this.authService.validateUser(RegisterModel);
    const userToRegister: UserEntity = new UserEntity();
    userToRegister.id = user.id;
    userToRegister.email = user.email;
    userToRegister.firstName = user.firstName;
    userToRegister.lastName = user.lastName;
    userToRegister.password = user.password;
    if (!validateUser) {
      return this.userRepository.create(userToRegister);
    }
    return null;
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async create(userToInsert: UserEntity): Promise<InsertResult> {
    return await this.userRepository.insert(userToInsert);
  }

  async findOne(email: any): Promise<any> {
    return this.userRepository.find(user => user.email === email);
  }

  async validateUser(loginModel: any): Promise<any> {
    const user = await this.authService.findOne(loginModel);
    const paswordIsCorrect: boolean = await this.passwordsAreEqual(user.password, loginModel.password)
    if (user && paswordIsCorrect) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const userFromDB = await this.validateUser(user);
    if (!userFromDB) {
      return null;
    }
    const payload = { email: userFromDB.email, id: userFromDB.id };
    return {
      access_tokne: this.jwtService.sign(payload)
    };
  }

  async passwordsAreEqual(
    hashedPassword: string,
    plainPassword: string
  ): Promise<boolean> {
    return await new Promise((resolve, reject) => bcrypt.compare(plainPassword, hashedPassword, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    }));
  }
}