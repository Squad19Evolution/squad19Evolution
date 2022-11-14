import { BadRequestException, Injectable } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private userRepo: UserRepository,
  ) {}

  async signup(user: CreateUserDto) {
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(user.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    user.password = result;
    return this.userService.createUser(user);
  }

  async login({ email, password }: UserLoginDto) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new BadRequestException('User or password incorrect');
    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash !== hash.toString('hex'))
      throw new BadRequestException('User or password incorrect');
    return user;
  }
}
