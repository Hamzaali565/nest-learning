import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';
import { Login, Register } from 'src/types/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async registerView(data: Register) {
    const chk_user = await this.userModel.findOne({
      email: data?.email.toLowerCase(),
    });
    if (chk_user) {
      throw new BadRequestException('User Already Exist');
    }
    await this.userModel.create({
      email: data?.email,
      password: data?.password,
      name: data?.name,
    });
    return {
      message: 'Registration Completed',
    };
  }

  async loginView(data: Login) {
    const user_chk = await this.userModel.findOne({ email: data?.email });
    if (!user_chk) {
      throw new BadRequestException('User not found !!!');
    }
    const pass_chk = await bcrypt.compare(data?.password, user_chk?.password);
    if (!pass_chk) {
      throw new BadRequestException('Invalid Password !!!');
    }

    const token = this.jwtService.sign({
      name: user_chk.name,
      email: user_chk.email,
      _id: user_chk._id,
    });
    return {
      message: 'Login Successfull !!!',
      token,
    };
  }

  async profileView(_id: string) {
    console.log('_id', _id);

    const user = await this.userModel.findById({ _id }, '-password');
    if (!user) {
      throw new BadRequestException('User not found !!!');
    }
    return {
      message: 'Profile Viewed',
      user,
    };
  }
}
