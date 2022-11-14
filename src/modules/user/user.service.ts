import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    const userExists = await this.userRepo.findByEmail(createUserDto.email);
    if (userExists) throw new ConflictException('Email already in use');
    return this.userRepo.create(createUserDto);
  }

  async findOne(id: number) {
    const user = await this.userRepo.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
