import { IsEnum, IsString } from "class-validator";
import { SubcatergoryName } from "src/common/types/subcategory.types";

export class CreateSubcategoryDto {
    @IsEnum(SubcatergoryName)
    name:string
}
