import { Work } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class WorkEntity implements Work {
  @ApiProperty()
  id: string;
  @ApiProperty()
  companyName: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  beginDate: Date;
  @ApiProperty()
  endDate: Date | null;
  @ApiProperty()
  image: string;

  @Exclude()
  isDeleted: boolean;

  constructor(partial: Partial<WorkEntity>) {
    Object.assign(this, partial);
  }
}
