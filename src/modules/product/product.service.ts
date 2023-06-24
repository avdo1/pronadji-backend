import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ContextService } from 'src/core/context/context.service';
import { RoleName } from 'src/common/types/role.types';
import { CategoryName } from 'src/common/types/catergory.types';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
    private readonly contextService: ContextService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const user = this.contextService.userContext.user;
    if(!user)
      throw Error('Dont have permition for create product')
    const product = this.repository.create(createProductDto);
    if(!product)
      throw Error('Error')
    return this.repository.save(product)
  }

  async findAll() {
    return this.repository.find();
  }

  async findManyByCategory(categoryName:CategoryName){
    return this.repository.find({where:{category:{categoryName:categoryName}}});
  } 
  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const user = this.contextService.userContext.user;
    if(!user)
      throw Error('Dont have permition for update product')
    const productFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    if(!productFromDatabase)
      throw Error(`Product with this id doesn't exist`)
    const updatedProduct = Object.assign(productFromDatabase, updateProductDto);
    return this.repository.update(id, updatedProduct);
  }

  async remove(id: string) {
    const user = this.contextService.userContext.user;
    if(!user)
      throw Error('Dont have permition for delete product')
    const product = this.repository.findOne({ where: { id: id } });
    if(!product)
      throw Error(`Product with this id doesn't exist`)
    return await this.repository.delete(id);
  }
}
