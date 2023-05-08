import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
  IsIn,
  Min,
} from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @Min(0)
  @IsNumber()
  @IsInt()
  @IsOptional()
  rooms?: number;

  @Min(0)
  @IsNumber()
  @IsInt()
  @IsOptional()
  bathrooms?: number;

  @Min(0)
  @IsNumber()
  @IsOptional()
  totalArea?: number;

  @Min(0)
  @IsNumber()
  @IsOptional()
  coveredArea?: number;

  @IsString()
  @MinLength(1)
  @IsOptional()
  description?: string;

  @IsString()
  @MinLength(1)
  address?: string;

  @IsString()
  type?: string;

  @IsString()
  @IsIn(['alquiler', 'venta'])
  operation?: string;

  @Min(0)
  @IsNumber()
  @IsInt()
  @IsOptional()
  antiquity?: number;

  @Min(0)
  @IsNumber()
  @IsInt()
  @IsOptional()
  bedrooms?: number;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
