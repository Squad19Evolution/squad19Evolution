import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Session,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { PublicUserDTO } from './dto/public-user.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post()
  @Serialize(PublicUserDTO)
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('/login')
  async login(@Body() body: UserLoginDto, @Session() session: any) {
    const user = await this.authService.login(body);
    if (!user) {
      session.userId = null;
      throw new NotFoundException('User not found');
    }
    session.userId = user.id;
    return user;
  }
}
