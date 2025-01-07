import { PartialType } from "@nestjs/mapped-types";
import { CreateDailyOfferDto } from "./create-daily-offer.dto";

export class UpdateDailyOfferDto extends PartialType(CreateDailyOfferDto) {}
