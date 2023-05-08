/* eslint-disable prettier/prettier */
import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interfaces/valid-roles.interface';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../guards/user-role.guard';

export const META_ROLES = 'roles';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    SetMetadata(META_ROLES, roles),
    UseGuards(AuthGuard(), UserRoleGuard),
  );
}
