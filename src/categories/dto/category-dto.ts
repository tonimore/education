import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Футбол', description: 'Название категории товара' })
  name: string;
}
