import { Content } from 'src/modules/content/entities/content.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Path {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  img_url: string;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Content, (content) => content.paths, { eager: true })
  @JoinTable({
    name: 'path_contents',
    joinColumn: { name: 'path_id' },
    inverseJoinColumn: { name: 'content_id' },
  })
  contents: Content[];
}
