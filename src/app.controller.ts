import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login')
  getHello() {
    return this.appService.getHello();
  }
  @Get('/register')
  getHello2() {
    return 'register';
  }
}
