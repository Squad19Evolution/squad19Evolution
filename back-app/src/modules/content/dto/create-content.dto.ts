import { IsNumber, IsString } from 'class-validator';

export class CreateContentDto {
  @IsNumber()
  path_id: number;

  @IsString()
  name: string;

  @IsString()
  url: string;

  @IsString()
  duration: string;
}
