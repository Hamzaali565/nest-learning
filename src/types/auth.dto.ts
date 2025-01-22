import { IsEmail, IsNotEmpty } from 'class-validator';
import { Request as ExpressRequest } from 'express';
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

export interface JwtPayload {
  name: string;
  email: string;
  _id: string;
  iat: number;
  exp: number;
}

export interface RequestWithUser extends ExpressRequest {
  user: JwtPayload;
}
