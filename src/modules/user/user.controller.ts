import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Session,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { PublicUserDTO } from './dto/public-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from './entities/user.entity';
import { CurrentUser } from './decorators/current-user.decorator';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post()
  @Serialize(PublicUserDTO)
  async create(@Body() createUserDto: CreateUserDto, @Session() session: any) {
    const newUser = await this.authService.signup(createUserDto);
    session.userId = newUser.id;
    return newUser;
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  @Serialize(PublicUserDTO)
  async whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Get(':id')
  @Serialize(PublicUserDTO)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('/login')
  @Serialize(PublicUserDTO)
  async login(@Body() body: UserLoginDto, @Session() session: any) {
    const user = await this.authService.login(body);
    if (!user) {
      session.userId = null;
      throw new NotFoundException('User not found');
    }
    session.userId = user.id;
    return user;
  }

  @Post('/logout')
  async logout(@Session() session: any) {
    session.userId = null;
  }
}
