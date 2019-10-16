import { Controller, Get, Post, Body, UseGuards, Request} from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { UserEntity } from '../entities/user.entity';
import { AccountModule } from '../models/account/account.module';
import { AuthGuard } from '@nestjs/passport';



@Controller()
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    ) { }

    
  @Get('findAll')
  findAll(): Promise<UserEntity[]> {
    return this.accountService.findAll();    
  }

  @Post('register')
  async register(@Body() accountModule: AccountModule): Promise<string> {
    return "register success";
  }


  @UseGuards(AuthGuard('jwt'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}