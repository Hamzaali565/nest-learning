import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Login, Register, RequestWithUser } from 'src/types/auth.dto';
import { UserService } from './user.service';
import { AuthGuard } from '../auth.guard';

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
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('/profile')
  profileView(@Request() req: RequestWithUser) {
    console.log('req.user', req.user._id);

    return this.userService.profileView(req.user._id);
    // return req.user;
  }
}
