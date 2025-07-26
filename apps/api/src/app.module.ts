import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectsModule } from './projects/projects.module';
import { ConfigModule } from '@nestjs/config';
import { WorksModule } from './works/works.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ProjectsModule, WorksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
