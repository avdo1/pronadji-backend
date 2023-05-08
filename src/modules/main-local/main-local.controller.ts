import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MainLocalService } from './main-local.service';
import { CreateMainLocalDto } from './dto/create-main-local.dto';
import { UpdateMainLocalDto } from './dto/update-main-local.dto';

@Controller('main-local')
export class MainLocalController {
  constructor(private readonly mainLocalService: MainLocalService) {}

  @Post()
  create(@Body() createMainLocalDto: CreateMainLocalDto) {
    return this.mainLocalService.create(createMainLocalDto);
  }

  @Get()
  findAll() {
    return this.mainLocalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainLocalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMainLocalDto: UpdateMainLocalDto,
  ) {
    return this.mainLocalService.update(+id, updateMainLocalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainLocalService.remove(+id);
  }
}
