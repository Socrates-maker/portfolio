import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  url?: string;
  @ApiProperty()
  coverImage: string;
  @ApiProperty()
  images: string[];
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}
