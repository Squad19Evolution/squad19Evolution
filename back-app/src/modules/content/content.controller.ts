import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ContentService } from './content.service';
import { ContentDto } from './dto/content-dto';
import { CreateContentDto } from './dto/create-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  @Serialize(ContentDto)
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.create(createContentDto);
  }

  @Get(':id')
  @Serialize(ContentDto)
  findOne(@Param('id') id: string) {
    return this.contentService.findById(+id);
  }
}
