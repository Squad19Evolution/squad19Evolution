import { Path } from 'src/modules/path/entities/path.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  duration: string;

  @ManyToMany(() => Path, (path) => path.contents)
  paths: Path[];
}
