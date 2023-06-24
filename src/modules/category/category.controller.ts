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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryName } from 'src/common/types/catergory.types';
import { JWTGuard } from 'src/lib/guards/jwt.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(JWTGuard)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Get('categoryName/:categoryName')
  findOneByCategoryName(@Param('categoryName') categoryName: CategoryName) {
    return this.categoryService.findOneByCategoryName(categoryName);
  }
  @UseGuards(JWTGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @UseGuards(JWTGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
