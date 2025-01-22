import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_KEY } from './constant';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://CRUD:hamzaali565@cluster0.kh990zg.mongodb.net/pracAuth?retryWrites=true&w=majority',
    ),
    AuthModule,
    JwtModule.register({
      global: true,
      secret: JWT_KEY,
      signOptions: { expiresIn: '40d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
