import { Module } from '@nestjs/common';
import { PathService } from './path.service';
import { PathController } from './path.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Path } from './entities/path.entity';
import { PathRepository } from './path.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Path])],
  controllers: [PathController],
  providers: [PathService, PathRepository],
  exports: [PathService, PathRepository],
})
export class PathModule {}
