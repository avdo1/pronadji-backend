import { IsEnum, IsOptional, IsString } from "class-validator";
import { CategoryName } from "src/common/types/catergory.types";
import { Product } from "src/modules/product/entities/product.entity";

export class UpdateCategoryDto {
  @IsString()
  description: string;
  @IsEnum(CategoryName)
  categoryName: CategoryName;
  @IsOptional()
  products: Product[];
}
