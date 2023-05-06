import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhotographsPhotoService } from './photographs-photo.service';
import { CreatePhotographsPhotoDto } from './dto/create-photographs-photo.dto';
import { UpdatePhotographsPhotoDto } from './dto/update-photographs-photo.dto';

@Controller('photographs-photo')
export class PhotographsPhotoController {
  constructor(private readonly photographsPhotoService: PhotographsPhotoService) {}

  @Post()
  create(@Body() createPhotographsPhotoDto: CreatePhotographsPhotoDto) {
    return this.photographsPhotoService.create(createPhotographsPhotoDto);
  }

  @Get()
  findAll() {
    return this.photographsPhotoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photographsPhotoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotographsPhotoDto: UpdatePhotographsPhotoDto) {
    return this.photographsPhotoService.update(+id, updatePhotographsPhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photographsPhotoService.remove(+id);
  }
}
