import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { DailyOfferStatus } from "src/common/types/dailyOffer.types";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";

export class CreateDailyOfferDto {
  @IsString()
  name: string;
  @IsNumber()
  newPrice: number;
  @IsEnum(DailyOfferStatus)
  status: DailyOfferStatus;
  @IsOptional()
  mainLocal: MainLocal;
}
