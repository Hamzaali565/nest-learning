import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { myname: 'Hello Hamza!' };
  }
  createTodo() {
    return { name: 'Todo 1', description: 'This is a todo' };
  }
}
