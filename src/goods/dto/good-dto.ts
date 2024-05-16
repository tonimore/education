import { ApiProperty } from '@nestjs/swagger';

export class CreateGoodDto {
  @ApiProperty({ example: 'Хоккейная клюшка', description: 'Название товара' })
  fullname: string;
  @ApiProperty({ example: 5, description: 'Рейтинг товара' })
  rating: number;
  @ApiProperty({
    example: [1, 3],
    description: 'Список идентификаторов категорий',
  })
  categories: number[];
}
