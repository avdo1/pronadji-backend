import { IsString } from "class-validator";


export class UpdateSubcategoryDto  {
    @IsString()
    name:string;
}
