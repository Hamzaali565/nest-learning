// pnpm i @nestjs/mongoose
// pnpm i mongoose
// pnpm i @nestjs/jwt
// pnpm i bcrypt
// pnpm @types/bcrypt

// how to connect mongoose
1- inside the import of app.module.ts wrtie this:

- MongooseModule.forRoot(
  'MONGODB_URI',
  ),

// How to create Models
2- create models folder on the root of src folder.

- your model look like this
  //\_\_\_\_//
  import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
  import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
@Prop({ isRequired: true, trim: true })
name: string;
@Prop({ isRequired: true, trim: true, unique: true, lowercase: true })
email: string;
@Prop({ isRequired: true, trim: true })
password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

// how to use jwt
//check this link

- [JWT From nestJs](https://docs.nestjs.com/security/authentication#jwt-token)

// create a new moduble
// \* nest g mo module-name

// create a new controller in auth folder "Api contact with controller"
// \* nest g controller auth/controller-name

// create a new service in auth folder "You Can write your buisness logic "
// \* nest g controller auth/controller-name

// use validation-pipe
// \* pnpm i class-validator
// \* pnpm i class-transformer
// put this line in main.ts
// \* app.useGlobalPipes(new ValidationPipe());
// \* To Create validation Schema check auth.dto.ts

// I have use registerView function in user.controller.ts i've created this function in user.service.ts

@Post()
signIn(@Body() data: Register) {
return this.userService.registerView(data);
}
}

// Create middleware(guard)
// \* nest g guard auth
