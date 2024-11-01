import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MainLocalService } from './main-local.service';
import { CreateMainLocalDto } from './dto/create-main-local.dto';
import { SearchMainLocalDto, UpdateMainLocalDto } from './dto/update-main-local.dto';
import { JWTGuard } from 'src/lib/guards/jwt.guard';

@Controller('main-local')
export class MainLocalController {
  constructor(private readonly mainLocalService: MainLocalService) {}

 
  @UseGuards(JWTGuard)
  @Post()
  create(@Body() createMainLocalDto: CreateMainLocalDto) {
    console.log("BODY ", createMainLocalDto);
    return this.mainLocalService.create(createMainLocalDto);
  }

  @Get()
  findAll() {
    return this.mainLocalService.findAll();
  }

  @Get('/user/:id')
  findByUser(
    @Param('id')id:string
  ) {
    return this.mainLocalService.findByUser(id);
  }
  @Get('/search/user')
  findBySearch(
    @Body() searchMainLocalDto: SearchMainLocalDto,
  ) {
    return this.mainLocalService.findBySearch(searchMainLocalDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainLocalService.findOne(id);
  }

  @UseGuards(JWTGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMainLocalDto: UpdateMainLocalDto,
  ) {
    return this.mainLocalService.update(id, updateMainLocalDto);
  }

  @UseGuards(JWTGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainLocalService.remove(id);
  }
}
