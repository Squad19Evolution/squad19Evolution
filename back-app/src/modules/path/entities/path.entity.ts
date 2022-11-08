import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Path {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  img_url: string;
}
