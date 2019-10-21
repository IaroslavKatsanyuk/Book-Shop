import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { UserEntity } from '../entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service'
import { RegisterModel } from 'src/models/account/register.model';



@Controller()
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly authService: AuthService,
    private readonly registerModel: RegisterModel,
  ) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  async findAll(): Promise<UserEntity[]> {
    return this.accountService.findAll();
  }

  @Post('register')
  async register(@Body() user: any){
    return this.accountService.register(user);
  }


  @Post('login')
  async login(@Body() registerModel: RegisterModel) {
    return this.authService.login(registerModel);
  }
}