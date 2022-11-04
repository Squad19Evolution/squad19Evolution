import { IsEmail, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Min(4)
  @Max(12)
  password: string;
}
