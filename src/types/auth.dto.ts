import { IsEmail, IsNotEmpty } from 'class-validator';

export class Register {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({})
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}

export class Login {
  @IsEmail({})
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
