import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { CategoryName } from "src/common/types/catergory.types";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const product = this.repository.create(createProductDto);
    if (!product) throw Error("Error");
    return this.repository.save(product);
  }

  async findAll() {
    return this.repository.find();
  }

  async findManyByCategory(categoryName: CategoryName) {
    return this.repository.find({ where: { category: { categoryName: categoryName } } });
  }
  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    console.log(productFromDatabase, "_+_+_++_+_", updateProductDto);
    if (!productFromDatabase) throw Error(`Product with this id doesn't exist`);
    const updatedProduct = Object.assign(productFromDatabase, updateProductDto);
    return this.repository.update(id, updatedProduct);
  }

  async remove(id: string) {
    const product = this.repository.findOne({ where: { id: id } });
    if (!product) throw Error(`Product with this id doesn't exist`);
    return await this.repository.delete(id);
  }
}
