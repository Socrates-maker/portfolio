import { Projet } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class ProjectEntity implements Projet {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  url: string | null;
  @ApiProperty()
  coverImage: string;
  @ApiProperty()
  images: string[];
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  @Exclude()
  isDeleted: boolean;

  constructor(partial: Partial<ProjectEntity>) {
    Object.assign(this, partial);
  }
}
