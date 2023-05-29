import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from 'src/modules/product/entities/product.entity';
import { CategoryName } from 'src/common/types/catergory.types';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('text')
  public description: string;

  @Column('text')
  public categoryName: CategoryName;

  @OneToMany(() => Product, (product) => product.category)
  public products: Product[];
}
