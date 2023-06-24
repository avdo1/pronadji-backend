import { IsOptional } from "class-validator";

export class UpdateProductDto  {
    @IsOptional()
    name:string;
    @IsOptional()
    descriprion:string;
    @IsOptional()
    price:number;
    @IsOptional()
    categortyId:string;
}
