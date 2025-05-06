import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { 
    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
          throw new UnauthorizedException('Você precisa estar logado para acessar este recurso');
        }
        return user;
      }
}
