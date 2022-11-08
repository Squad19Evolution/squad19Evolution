import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContentDto } from './dto/create-content.dto';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentRepository {
  constructor(@InjectRepository(Content) private repo: Repository<Content>) {}

  async create(content: CreateContentDto) {
    const newContent = this.repo.create(content);
    return this.repo.save(newContent);
  }
}
