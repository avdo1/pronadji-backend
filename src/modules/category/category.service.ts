import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { Repository } from "typeorm";
import { CategoryName } from "src/common/types/catergory.types";
import { ProductService } from "../product/product.service";
import { CreateProductDto } from "../product/dto/create-product.dto";
import { UpdateProductDto } from "../product/dto/update-product.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
    private readonly productService: ProductService,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const categoryByName = await this.findOneByCategoryName(createCategoryDto.categoryName);
    if (categoryByName) throw Error("Category by this category name already exist");
    try {
      const category = await this.repository.create(createCategoryDto);
      const savedCategory = await this.repository.save(category);
      if (createCategoryDto.products && createCategoryDto.products.length > 0) {
        category?.products.forEach(async product => {
          const createProductDto: CreateProductDto = {
            name: product.name,
            description: product.description,
            price: product.price,
            category: savedCategory,
          };
          await this.productService.create(createProductDto);
        });
      }
      return savedCategory;
    } catch (error) {
      throw Error(error);
    }
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id: id } });
  }
  async findAllByLocalId(id: string) {
    let query = this.repository.createQueryBuilder("category").leftJoinAndSelect("category.products", "products");
    if (id) {
      query = query.where("category.mainLocalId = :id", { id: `${id}` });
    }
    return query.getMany() || [];
  }

  async findOneByCategoryName(categoryName: CategoryName) {
    return await this.repository.findOne({ where: { categoryName: categoryName } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const backendCategory = await this.findOne(id);
    if (!backendCategory) throw Error("Category by this id dont exists");
    try {
      const updateCategoryData = Object.assign(backendCategory, { description: updateCategoryDto.description, categoryName: updateCategoryDto.categoryName });
      const updatedCategory = await this.repository.update(id, updateCategoryData);
      const productsByCategory = await this.productService.findManyByCategory(backendCategory?.categoryName);
      if (updateCategoryDto.products && updateCategoryDto.products.length > 0) {
        updateCategoryDto?.products.forEach(async product => {
          if (product?.id) {
            const updateProductDto: UpdateProductDto = {
              name: product.name,
              description: product.description,
              price: product.price,
              category: backendCategory,
            };
            await this.productService.update(product.id, updateProductDto);
          } else {
            const createProductDto: CreateProductDto = {
              name: product.name,
              description: product.description,
              price: product.price,
              category: backendCategory,
            };
            await this.productService.create(createProductDto);
          }
        });
      }
      productsByCategory?.forEach(async product => {
        const deleteProduct = updateCategoryDto?.products?.every(itemProduct => itemProduct.id != product.id);
        if (deleteProduct) await this.productService.remove(product?.id);
      });
      return updatedCategory;
    } catch (error) {
      throw Error(error);
    }
  }

  async remove(id: string) {
    const backendCategory = await this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(backendCategory);
  }
}
