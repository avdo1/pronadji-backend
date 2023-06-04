import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return this.repository.create(createProductDto);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    const updatedProduct = Object.assign(productFromDatabase, updateProductDto);
    return this.repository.update(id, updatedProduct);
  }

  async remove(id: string) {
    const product = this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(id);
  }
}
