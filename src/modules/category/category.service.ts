import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { ContextService } from 'src/core/context/context.service';
import { CategoryName } from 'src/common/types/catergory.types';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
    private readonly contextService: ContextService
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const user = await this.contextService.userContext.user;
    if(!user)
      throw Error('User not main adminstrator')
    const categoryByName = await this.findOneByCategoryName(createCategoryDto.categoryName);
    if(categoryByName)
      throw Error('Category by this category name already exist')
    try {
      const category= await this.repository.create(createCategoryDto)
      return this.repository.save(category);
    } catch (error) {
      throw Error(error)
    }
    
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({where:{id:id}});
  }
  
  async findOneByCategoryName(categoryName:CategoryName) {
    return await this.repository.findOne({where:{categoryName:categoryName}});
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const user = await this.contextService.userContext.user;
    if(!user)
      throw Error('User not main adminstrator')
    const categoryById = await this.findOne(id);
    if(!categoryById)
      throw Error('Category by this id dont exists')
    const categoryByName = await this.findOneByCategoryName(updateCategoryDto.categoryName);
    if(categoryByName)
      throw Error('Category by this category name already exist')
    const updateCategory= Object.assign(categoryById,updateCategoryDto)
    return await this.repository.update(id,updateCategory);
  }

  async remove(id: string) {
    const user = await this.contextService.userContext.user;
    if(!user)
      throw Error('User not main adminstrator')
    return await this.repository.delete(id)
  }
}
