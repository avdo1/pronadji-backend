import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { DailyOfferStatus } from "src/common/types/dailyOffer.types";
import { JobOfferStatus } from "src/common/types/jobOffer.types";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";

export class CreateJobOfferDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  phone: string;
  @IsString()
  email: string;
  @IsEnum(JobOfferStatus)
  status: JobOfferStatus;
  @IsOptional()
  mainLocal: MainLocal;
}
