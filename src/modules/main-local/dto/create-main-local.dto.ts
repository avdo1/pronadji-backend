import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMainLocalDto {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsString()
  location: string;
  @IsString()
  description: string;
  @IsNumber()
  workingHours: number;
  @IsString()
  facebook: string;
  @IsString()
  twitter: string;
  @IsString()
  instagram: string;
  @IsOptional()
  subCategoryId: string;
}
