import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name:string;
    @IsString()
    descriprion:string;
    @IsNumber()
    price:number;
    @IsString()
    categortyId:string;
}
