import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Path } from '../path/entities/path.entity';
import { PathRepository } from '../path/path.repository';
import { CreateContentDto } from './dto/create-content.dto';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentRepository {
  constructor(
    @InjectRepository(Content) private repo: Repository<Content>,
    private pathRepo: PathRepository,
  ) {}

  async create(content: CreateContentDto, path: Path) {
    const newContent = this.repo.create(content);
    newContent.paths = [path];
    path.contents = [...path.contents, newContent];
    await this.repo.save(newContent);
    await this.pathRepo.repo.save(path);
    return newContent;
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }
}
