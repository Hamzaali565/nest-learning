import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, AppService],
})
export class TodoModule {}
