import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectEntity } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createProjectDto: CreateProjectDto) {
    return this.prisma.projet.create({ data: createProjectDto });
  }

  async findAll(): Promise<ProjectEntity[]> {
    const projects = await this.prisma.projet.findMany({
      where: { isDeleted: false },
    });
    return projects.map((project) => new ProjectEntity(project));
  }

  async findOne(id: string) {
    const dbProject = await this.prisma.projet.findUnique({
      where: { id },
    });
    if (!dbProject) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
    return new ProjectEntity(dbProject);
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const dbProject = await this.prisma.projet.findUnique({ where: { id } });
    if (!dbProject) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
    return await this.prisma.projet.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  async remove(id: string) {
    const dbProject = await this.prisma.projet.findUnique({ where: { id } });
    if (!dbProject) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }
    await this.prisma.projet.update({
      where: { id },
      data: { ...dbProject, isDeleted: true },
    });
    return `This action removes a #${id} project`;
  }
}
