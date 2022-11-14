import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateContentDto {
  @IsNumber()
  @IsOptional()
  path_id: number;

  @IsString()
  name: string;

  @IsString()
  url: string;

  @IsString()
  duration: string;
}
