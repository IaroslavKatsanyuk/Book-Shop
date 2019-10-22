import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service'
import { RegisterModel } from 'src/models/account/register.model';
import { LoginModel } from 'src/models/account/login.model';



@Controller()
export class AccountController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  async findAll(): Promise<UserEntity[]> {
    return this.authService.findAll();
  }

  @Post('register')
  async register(@Body() registerModel: RegisterModel){
    return this.authService.register(registerModel);
  }


  @Post('login')
  async login(@Body() loginModel: LoginModel) {
    return this.authService.login(loginModel);
  }
}