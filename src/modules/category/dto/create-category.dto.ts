import { IsEnum, IsOptional, IsString } from "class-validator";
import { CategoryName } from "src/common/types/catergory.types";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";
import { Product } from "src/modules/product/entities/product.entity";

export class CreateCategoryDto {
  @IsString()
  descritption: string;
  @IsEnum(CategoryName)
  categoryName: CategoryName;
  @IsOptional()
  mainLocal: MainLocal;
  @IsOptional()
  products: Product[];
}
