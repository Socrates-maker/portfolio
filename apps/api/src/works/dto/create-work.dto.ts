import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWorkDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyName: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;
  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  beginDate: Date;
  @ApiProperty()
  @IsDate()
  @IsOptional()
  endDate?: Date;
  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  image: string;
}
