import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ProjectDto } from './dto/project-dto';
import { ProjectEntity } from './entities/project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @ApiCreatedResponse({ description: 'Create a project', type: ProjectDto })
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @ApiOkResponse({ description: 'Get all projects', type: [ProjectEntity] })
  @Get()
  async findAll(): Promise<ProjectEntity[]> {
    return this.projectsService.findAll();
  }

  @ApiOkResponse({ description: 'Get a project', type: ProjectEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @ApiCreatedResponse({ description: 'Update a project', type: ProjectDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @ApiOkResponse({ description: 'Delete a project' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
