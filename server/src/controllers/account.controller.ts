import { Controller, Get, Post, Body, UseGuards, Request} from '@nestjs/common';
import { AccountService } from '../services/AccountService';
import { Users } from '../entities/user.entity';
import { AccountModel } from '../models/account/accountModel';
import { AuthGuard } from '@nestjs/passport';



@Controller()
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    ) { }

    
  @Get()
  findAll(): Promise<Users[]> {
    return this.accountService.findAll();
  }

  @Post('register')
  async register(@Body() accountModule: AccountModel): Promise<string> {
    return "register success";
  }


  @UseGuards (AuthGuard('local'))  
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}