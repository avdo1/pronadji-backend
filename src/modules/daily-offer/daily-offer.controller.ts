import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DailyOfferService } from './daily-offer.service';
import { CreateDailyOfferDto } from './dto/create-daily-offer.dto';
import { UpdateDailyOfferDto } from './dto/update-daily-offer.dto';

@Controller('daily-offer')
export class DailyOfferController {
  constructor(private readonly dailyOfferService: DailyOfferService) {}

  @Post()
  create(@Body() createDailyOfferDto: CreateDailyOfferDto) {
    return this.dailyOfferService.create(createDailyOfferDto);
  }

  @Get()
  findAll() {
    return this.dailyOfferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyOfferService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDailyOfferDto: UpdateDailyOfferDto,
  ) {
    return this.dailyOfferService.update(+id, updateDailyOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyOfferService.remove(+id);
  }
}
