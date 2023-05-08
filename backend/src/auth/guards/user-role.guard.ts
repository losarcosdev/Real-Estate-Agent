import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { User } from '../entities/user.entity';
import { META_ROLES } from '../decorators/auth.decorator';
import {
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common/exceptions';

@Injectable()
export class UserRoleGuard implements CanActivate {
  // Accede a la data metadata de los decoradores
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    ctx: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const metaRoles: string[] = this.reflector.get(
      META_ROLES,
      ctx.getHandler(),
    );

    if (!metaRoles) return true;
    if (!metaRoles.length) return true;

    // Obtenemos el usuario
    const req = ctx.switchToHttp().getRequest();
    const user: User = req.user;

    if (!user) {
      throw new BadRequestException('User not found');
    }

    metaRoles.forEach((role) => {
      if (!user.roles.includes(role)) {
        throw new ForbiddenException(
          `Unauthorized, role:${role}. Valid roles: ${user.roles}`,
        );
      }
    });

    return true;
  }
}
