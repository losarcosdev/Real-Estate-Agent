import { Type } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

export class QueryDto {
  @IsString()
  @IsOptional()
  @Type(() => String)
  order_price: 'asc' | 'desc' | 'ASC' | 'DESC';

  @IsString()
  @IsOptional()
  @Type(() => String)
  order_title: 'asc' | 'desc' | 'ASC' | 'DESC';

  @IsString()
  @IsOptional()
  @Type(() => String)
  operation: 'alquiler' | 'venta';
}
