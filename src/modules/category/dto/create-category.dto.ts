import { IsEnum, IsString } from "class-validator";
import { CategoryName } from "src/common/types/catergory.types";

export class CreateCategoryDto {
    @IsString()
    descritption: string;
    @IsEnum(CategoryName)
    categoryName:CategoryName;
}
