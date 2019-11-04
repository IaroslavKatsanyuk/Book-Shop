import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from 'src/secrets/jwt.constants';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jsonwebtoken') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.accessSecret
    });
  }

  async validate(payload: any) {
    return { email: payload.email, id: payload.id };
  }
}