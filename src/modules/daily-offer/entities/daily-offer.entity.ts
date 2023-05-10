import { DailyOfferStatus } from 'src/common/types/dailyOffer.types';
import { Category } from 'src/modules/category/entities/category.entity';
import { MainLocal } from 'src/modules/main-local/entities/main-local.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class DailyOffer {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('text')
  public status: DailyOfferStatus;

  @Column('decimal')
  public newPrice: number;

  @OneToMany(() => Product, (product) => product.dailyOffer)
  public products: Product[];

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public category: Category;

  @ManyToOne(() => MainLocal, (mainLocal) => mainLocal.dailyOffers, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public mainLocal: MainLocal;
}
