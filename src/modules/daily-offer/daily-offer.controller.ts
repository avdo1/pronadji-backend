import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { DailyOfferService } from "./daily-offer.service";
import { CreateDailyOfferDto } from "./dto/create-daily-offer.dto";
import { UpdateDailyOfferDto } from "./dto/update-daily-offer.dto";
import { AdminGuard } from "src/lib/guards/admin.guard";

@Controller("daily-offer")
export class DailyOfferController {
  constructor(private readonly dailyOfferService: DailyOfferService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createDailyOfferDto: CreateDailyOfferDto) {
    return this.dailyOfferService.create(createDailyOfferDto);
  }

  @Get()
  findAll() {
    return this.dailyOfferService.findAll();
  }
  @Get("local/:id")
  findAllByLocalId(@Param("id") id: string) {
    return this.dailyOfferService.findAllByLocalId(id);
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.dailyOfferService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDailyOfferDto: UpdateDailyOfferDto) {
    return this.dailyOfferService.update(id, updateDailyOfferDto);
  }

  @UseGuards(AdminGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.dailyOfferService.remove(id);
  }
}
