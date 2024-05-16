import { ApiProperty } from '@nestjs/swagger';

export class CreateSupplierDto {
  @ApiProperty({ example: 'Адидас', description: 'Название поставщика товара' })
  fullname: string;
  @ApiProperty({
    example: 'ФРГ, Мюнхен, Уберштрассе 12',
    description: 'Адрес поставщика товара',
  })
  address: string;
  @ApiProperty({
    example: '+6(345)445-33-11',
    description: 'Телефон поставщика товара',
  })
  phone: string;
  @ApiProperty({
    example: 'sales@adidas.de',
    description: 'Адрес эл почты поставщика товара',
  })
  email: string;
  @ApiProperty({
    example: [1, 2],
    description: 'Список идентификаторов товара',
  })
  goods: string[];
}
