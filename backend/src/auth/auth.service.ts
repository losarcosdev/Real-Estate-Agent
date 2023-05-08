import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import * as bcrypt from 'bcrypt';
import { LoginUserDto, CreateUserDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Creates a new user in the database with the provided user data.
   * @param createUserDto - an object containing the user data to create a new user
   * @returns the new user object, including a JSON web token
   */
  async createUser(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;

      // Create a new user object with the provided user data, and hash the password
      const user = this.userRepository.create({
        email: userData.email,
        password: bcrypt.hashSync(password, 12),
        roles: ['user'],
      });

      // Save the new user to the database
      await this.userRepository.save(user);

      // Remove the password from the user object before returning it
      delete user.password;
      delete user.id;

      // Return the new user object, including a JSON web token
      return {
        ...user,
        token: this.generateJWT({ id: user.id }),
      };
    } catch (error) {
      this.handleErrors(error);
    }
  }

  /**
   * Attempts to log in a user with the provided email and password.
   * @param loginUserDto - an object containing the email and password for the user attempting to log in
   * @returns the user object, including a JSON web token
   */
  async loginUser(loginUserDto: LoginUserDto) {
    try {
      const { email, password } = loginUserDto;

      // Find a user with a matching email in the database
      const user = await this.userRepository.findOne({
        where: { email },
        select: {
          email: true,
          password: true,
          roles: true,
        },
      });

      // If no user is found, throw an UnauthorizedException
      if (!user) {
        throw new UnauthorizedException(
          'Not found user with those credentials [EMAIL]',
        );
      }

      // Compare the provided password with the hashed password in the database using bcrypt
      if (!bcrypt.compareSync(password, user.password)) {
        // If the passwords don't match, throw an UnauthorizedException
        throw new UnauthorizedException(
          'Not found user with those credentials [PASSWORD]',
        );
      }

      delete user.password;

      // Return the user if the email and password are correct
      return {
        ...user,
        token: this.generateJWT({ id: user.id }),
      };
    } catch (error) {
      this.handleErrors(error);
    }
  }

  private generateJWT(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  private handleErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(`Unexpected error: ${error}`);
    throw new InternalServerErrorException('Server error - check logs');
  }
}
