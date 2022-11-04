import { Expose } from 'class-transformer';

export class PublicUserDTO {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
