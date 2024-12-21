import { IsNotEmpty, IsNumber } from 'class-validator';

export class createTodo {
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
