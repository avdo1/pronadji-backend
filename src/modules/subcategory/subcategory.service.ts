import { Injectable } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { Subcategory } from './entities/subcategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContextService } from 'src/core/context/context.service';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(Subcategory)
    private readonly repository: Repository<Subcategory>,
    private readonly contextService: ContextService,
  ) {}
  async create(createSubcategoryDto: CreateSubcategoryDto) {
    const user = this.contextService.userContext.user;
    if(!user)
      throw Error('Dont have permition')
    try {
      const subcategory = await this.repository.create(createSubcategoryDto);
      return await this.repository.save(subcategory)
    } catch (error) {
      throw Error(error)
    }
  }

  async findAll() {
    return this.repository.createQueryBuilder('subcategories')
    .leftJoinAndSelect('subcategories.mainLocals', 'mainLocals')
    .getMany();
  }
  async findCategory() {
    return this.repository.find();
  }

  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateSubcategoryDto: UpdateSubcategoryDto) {
    const user = this.contextService.userContext.user;
    if(!user)
      throw Error('Dont have permition')
    
    const subcategoryFromDatabase = await this.repository.findOne({where:{id:id}})
    if(!subcategoryFromDatabase)
      throw Error(`Subcategory with this id doesn't exist`)
    const updatedSubcategory = Object.assign(subcategoryFromDatabase,updateSubcategoryDto)
    try {
      return await this.repository.update(id,updatedSubcategory);
    } catch (error) {
      throw Error(error)
    }
  }

  async remove(id: string) {
    const user = await this.contextService.userContext.user
    if(!user)
      throw Error(`Don't have permition`)
    const subcategory =await this.repository.findOne({ where: { id: id } });
    if(!subcategory)
    throw Error(`Subcategory with this id doesn't exist`)
    return await this.repository.delete(id);
  }
}
