// pnpm i @nestjs/mongoose
// pnpm i mongoose
// pnpm i @nestjs/jwt
// pnpm i bcrypt
// pnpm @types/bcrypt

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

  <!-- @Post()
  signIn(@Body() data: Register) {
    return this.userService.registerView(data);
  }
} -->
