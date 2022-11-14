import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { User } from './modules/user/entities/user.entity';
import { UserModule } from './modules/user/user.module';
import { ContentModule } from './modules/content/content.module';
import { PathModule } from './modules/path/path.module';
import { Path } from './modules/path/entities/path.entity';
import { Content } from './modules/content/entities/content.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'babar.db.elephantsql.com',
      password: '7Ry71fjyHQdgr2C3n0HFchXlwrnaO5W3',
      username: 'kvgrssjl',
      database: 'kvgrssjl',
      entities: [User, Path, Content],
      synchronize: true,
    }),
    ContentModule,
    PathModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
