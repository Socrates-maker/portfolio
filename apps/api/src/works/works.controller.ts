import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorksService } from './works.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { WorkEntity } from './entities/work.entity';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Post()
  create(@Body() createWorkDto: CreateWorkDto) {
    return this.worksService.create(createWorkDto);
  }

  @ApiOkResponse({ description: 'Get all works', type: [WorkEntity] })
  @Get()
  findAll(): Promise<WorkEntity[]> {
    return this.worksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.worksService.update(+id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worksService.remove(+id);
  }
}
