import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { createTodo } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private appservervice: AppService) {}

  private todo = [];

  @Post('create')
  createTodo(@Body() data: createTodo) {
    const items = {
      id: new Date().getTime(),
      ...data,
      time: new Date().toLocaleString(),
    };
    this.todo.push(items);
    return { message: 'Todo Created Successfully' };
  }

  @Get('/create')
  getTodo() {
    return { data: this.todo };
  }

  @Put('/update-todo/:id')
  updateTodo(@Body() data: createTodo, @Param('id') id: number) {
    console.log(data, id, this.todo);

    const todoItem = this.todo.find((items) => items.id == id);
    console.log('todoItem', todoItem);

    if (!todoItem) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    const updateTodo = this.todo.map((items) => {
      if (items.id == id) {
        return { ...items, name: data.name };
      }
      return items;
    });
    this.todo = updateTodo;
    return { message: 'todo is updated' };
  }

  @Delete('delete')
  deleteTodo(@Query('id') id: number) {
    console.log(id);

    const deleteobject = this.todo.filter((items) => items.id != id);
    this.todo = deleteobject;
    return { message: 'Todo Deleted Successfully !!!' };
  }
}
