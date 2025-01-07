import { Injectable } from "@nestjs/common";
import { CreateMainLocalDto } from "./dto/create-main-local.dto";
import { SearchMainLocalDto, UpdateMainLocalDto } from "./dto/update-main-local.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MainLocal } from "./entities/main-local.entity";
import { Repository } from "typeorm";
import { ContextService } from "src/core/context/context.service";
import { SubcategoryService } from "../subcategory/subcategory.service";

@Injectable()
export class MainLocalService {
  constructor(
    @InjectRepository(MainLocal)
    private readonly repository: Repository<MainLocal>,
    private readonly contextService: ContextService,
    private readonly subcategoriesService: SubcategoryService,
  ) {}
  async create(createMainLocalDto: CreateMainLocalDto) {
    const user = this.contextService.userContext;
    const subCategory = await this.subcategoriesService.findOne(createMainLocalDto?.subCategoryId);
    let createdMainLocal = new MainLocal();
    createdMainLocal = Object.assign(createMainLocalDto);
    createdMainLocal.user = user.user;
    createdMainLocal.subcategories = [subCategory];

    if (!createdMainLocal || !createdMainLocal.user) throw Error("Error");

    return await this.repository.save(createdMainLocal);
  }

  async findAll() {
    return this.repository.find();
  }
  async findByUser(id: string) {
    return this.repository.find({ where: { user: { id: id } } });
  }
  async findBySearch(searchMainLocalDto: SearchMainLocalDto) {
    let query = this.repository.createQueryBuilder("mainLocal").leftJoinAndSelect("mainLocal.subcategories", "subCategories").leftJoinAndSelect("mainLocal.events", "event");
    if (searchMainLocalDto.name) {
      query = query.where("mainLocal.name LIKE :name", { name: `%${searchMainLocalDto.name}%` });
    }

    if (searchMainLocalDto.location) {
      query = query.andWhere("mainLocal.location LIKE :location", { location: `%${searchMainLocalDto.location}%` });
    }
    if (searchMainLocalDto.event) {
      query = query.andWhere("event.name  LIKE :name", { name: `%${searchMainLocalDto.event}%` });
    }
    if (searchMainLocalDto.category) {
      query = query.andWhere("subCategories.name LIKE :name ", { name: `%${searchMainLocalDto.category}%` });
    }

    return query.getMany() || [];
  }
  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateMainLocalDto: UpdateMainLocalDto) {
    const mainLocalFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    const updatedMainLocal = Object.assign(mainLocalFromDatabase, updateMainLocalDto);
    const updatedData = await this.repository.update(id, updatedMainLocal);
    return await this.repository.save(updatedMainLocal);
  }

  async remove(id: string) {
    const mainLocal = await this.repository.findOne({ where: { id: id } });
    if (!mainLocal) throw Error("Error");
    return await this.repository.delete(mainLocal.id);
  }
}
