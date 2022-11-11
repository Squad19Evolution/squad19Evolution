import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePathDto } from './dto/create-path.dto';
import { PathRepository } from './path.repository';

@Injectable()
export class PathService {
  constructor(private pathRepo: PathRepository) {}

  async create(createPathDto: CreatePathDto) {
    return this.pathRepo.create(createPathDto);
  }

  findAll() {
    return `This action returns all path`;
  }

  async findById(id: number) {
    const path = await this.pathRepo.findById(id);
    if (!path) throw new NotFoundException('Path not found');
    return path;
  }
}
