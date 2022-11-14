import { Expose } from 'class-transformer';

export class ContentDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  url: string;

  @Expose()
  duration: string;
}
