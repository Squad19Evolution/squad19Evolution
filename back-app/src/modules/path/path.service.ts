import { Injectable } from '@nestjs/common';
import { CreatePathDto } from './dto/create-path.dto';

@Injectable()
export class PathService {
  create(createPathDto: CreatePathDto) {
    return 'This action adds a new path';
  }

  findAll() {
    return `This action returns all path`;
  }

  findById(id: number) {
    return `This action returns a #${id} path`;
  }
}
