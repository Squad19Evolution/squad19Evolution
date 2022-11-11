import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePathDto } from './dto/create-path.dto';
import { Path } from './entities/path.entity';

@Injectable()
export class PathRepository {
  constructor(@InjectRepository(Path) public repo: Repository<Path>) {}

  async create(path: CreatePathDto) {
    const newPath = this.repo.create(path);
    return this.repo.save(newPath);
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }
}
