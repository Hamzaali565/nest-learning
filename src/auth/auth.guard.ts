import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JWT_KEY } from 'src/constant';
import { JwtPayload } from 'src/types/auth.dto';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const authToken = request.headers['authorization'] || '';

    if (!authToken || !authToken.startsWith('Bearer')) {
      throw new UnauthorizedException('Please login first');
    }
    const token = authToken.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not valid');
    }
    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret: JWT_KEY,
      });

      request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
    return true;
  }
}
