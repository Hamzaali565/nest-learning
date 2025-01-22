import { Body, Controller, Get, Post } from '@nestjs/common';
import { Login, Register } from 'src/types/auth.dto';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  indexView() {
    return {
      msg: 'Hello',
    };
  }

  @Post('/register')
  signIn(@Body() data: Register) {
    return this.userService.registerView(data);
  }

  @Post('/login')
  loginView(@Body() data: Login) {
    return this.userService.loginView(data);
  }
}
