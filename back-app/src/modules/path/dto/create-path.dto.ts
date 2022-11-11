import { IsOptional, IsString } from 'class-validator';

export class CreatePathDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  img_url?: string;
}
