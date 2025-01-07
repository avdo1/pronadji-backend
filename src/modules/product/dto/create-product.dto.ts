import { IsNumber, IsOptional, IsString } from "class-validator";
import { Category } from "src/modules/category/entities/category.entity";

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
  @IsOptional()
  category: Category;
}
