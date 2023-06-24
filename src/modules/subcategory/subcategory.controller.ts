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
import { SubcategoryService } from './subcategory.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { JWTGuard } from 'src/lib/guards/jwt.guard';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @UseGuards(JWTGuard)
  @Post()
  create(@Body() createSubcategoryDto: CreateSubcategoryDto) {
    return this.subcategoryService.create(createSubcategoryDto);
  }

  @Get()
  findAll() {
    return this.subcategoryService.findAll();
  }
  
  @Get('locals/bycategory')
  findCategory() {
    return this.subcategoryService.findCategory();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategoryService.findOne(id);
  }

  @UseGuards(JWTGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubcategoryDto: UpdateSubcategoryDto,
  ) {
    return this.subcategoryService.update(id, updateSubcategoryDto);
  }

  @UseGuards(JWTGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategoryService.remove(id);
  }
}
