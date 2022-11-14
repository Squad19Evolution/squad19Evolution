import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PathService } from './path.service';
import { CreatePathDto } from './dto/create-path.dto';

@Controller('path')
export class PathController {
  constructor(private readonly pathService: PathService) {}

  @Post()
  create(@Body() createPathDto: CreatePathDto) {
    return this.pathService.create(createPathDto);
  }

  @Get()
  findAll() {
    return this.pathService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.pathService.findById(+id);
  }
}
