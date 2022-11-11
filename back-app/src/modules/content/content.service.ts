import { Injectable, NotFoundException } from '@nestjs/common';
import { PathService } from '../path/path.service';
import { ContentRepository } from './content.repository';
import { CreateContentDto } from './dto/create-content.dto';

@Injectable()
export class ContentService {
  constructor(
    private contentRepo: ContentRepository,
    private pathService: PathService,
  ) {}

  async create(createContentDto: CreateContentDto) {
    const path = await this.pathService.findById(createContentDto.path_id);
    return this.contentRepo.create(createContentDto, path);
  }

  async findById(id: number) {
    const content = await this.contentRepo.findById(id);
    if (!content) throw new NotFoundException('Content not found');
    return content;
  }
}
