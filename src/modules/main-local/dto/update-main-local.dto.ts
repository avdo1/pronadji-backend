import { PartialType } from '@nestjs/mapped-types';
import { CreateMainLocalDto } from './create-main-local.dto';
import { IsOptional } from 'class-validator';

export class UpdateMainLocalDto extends PartialType(CreateMainLocalDto) {
    @IsOptional()
    name:string;
    @IsOptional()
    email:string;
    @IsOptional()
    phone:string;
    @IsOptional()
    location:string;
    @IsOptional()
    description:string;
    @IsOptional()
    workingHours:number;
    @IsOptional()
    facebook:string;
    @IsOptional()
    twitter:string;
    @IsOptional()
    instagram:string;
}
export class SearchMainLocalDto  {
    @IsOptional()
    name:string;
    @IsOptional()
    location:string;
    @IsOptional()
    category:string;
    @IsOptional()
    event:string;
    
}