import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { User } from './modules/user/entities/user.entity';
import { UserModule } from './modules/user/user.module';
import { ContentModule } from './modules/content/content.module';
import { PathModule } from './modules/path/path.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'orange_db',
      password: 'password',
      username: 'root',
      port: 5432,
      database: 'db',
      entities: [User],
      synchronize: true,
    }),
    ContentModule,
    PathModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
