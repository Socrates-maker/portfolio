import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { PrismaService } from '../prisma/prisma.service';
import { WorkEntity } from './entities/work.entity';

@Injectable()
export class WorksService {
  constructor(private readonly prisma: PrismaService) {}

  create(createWorkDto: CreateWorkDto) {
    return this.prisma.work.create({ data: createWorkDto });
  }

  async findAll(): Promise<WorkEntity[]> {
    const works = await this.prisma.work.findMany({
      where: { isDeleted: false },
    });
    return works.map((work) => new WorkEntity(work));
  }

  findOne(id: number) {
    return `This action returns a #${id} work`;
  }

  update(id: number, updateWorkDto: UpdateWorkDto) {
    return `This action updates a #${id} work`;
  }

  remove(id: number) {
    return `This action removes a #${id} work`;
  }
}
