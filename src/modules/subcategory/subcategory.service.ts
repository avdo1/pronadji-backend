import { Injectable } from "@nestjs/common";
import { CreateSubcategoryDto } from "./dto/create-subcategory.dto";
import { UpdateSubcategoryDto } from "./dto/update-subcategory.dto";
import { Subcategory } from "./entities/subcategory.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(Subcategory)
    private readonly repository: Repository<Subcategory>,
  ) {}
  async create(createSubcategoryDto: CreateSubcategoryDto) {
    try {
      const subcategory = await this.repository.create(createSubcategoryDto);
      return await this.repository.save(subcategory);
    } catch (error) {
      throw Error(error);
    }
  }

  async findAll() {
    return this.repository.createQueryBuilder("subcategories").leftJoinAndSelect("subcategories.mainLocals", "mainLocals").getMany();
  }
  async findCategory() {
    return this.repository.find();
  }

  async findOne(subcategoryId: string) {
    return this.repository
      .createQueryBuilder("subcategories")
      .leftJoinAndSelect("subcategories.mainLocals", "mainLocals")
      .where("subcategories.id = :subcategoryId", { subcategoryId })
      .getOne();
  }

  async update(id: string, updateSubcategoryDto: UpdateSubcategoryDto) {
    const subcategoryFromDatabase = await this.repository.findOne({ where: { id: id } });
    if (!subcategoryFromDatabase) throw Error(`Subcategory with this id doesn't exist`);
    const updatedSubcategory = Object.assign(subcategoryFromDatabase, updateSubcategoryDto);
    try {
      return await this.repository.update(id, updatedSubcategory);
    } catch (error) {
      throw Error(error);
    }
  }

  async remove(id: string) {
    const subcategory = await this.repository.findOne({ where: { id: id } });
    if (!subcategory) throw Error(`Subcategory with this id doesn't exist`);
    return await this.repository.delete(id);
  }
}
