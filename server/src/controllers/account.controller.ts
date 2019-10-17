import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { UserEntity } from '../entities/user.entity';
import { AccountModule } from '../models/account/account.module';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service'



@Controller()
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly authService: AuthService,
  ) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(): Promise<UserEntity[]> {
    return this.accountService.findAll();
  }

  @Post('register')
  async register(@Body() accountModule: AccountModule): Promise<string> {
    return "register success";
  }


  @Post('login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }
}