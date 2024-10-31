import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Product } from "src/modules/product/entities/product.entity";
import { CategoryName } from "src/common/types/catergory.types";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column("text")
  public description: string;

  @Column("text")
  public categoryName: CategoryName;

  @OneToMany(() => Product, product => product.category)
  public products: Product[];

  @ManyToOne(() => MainLocal, mainLocal => mainLocal.categorys, {
    onDelete: "CASCADE",
    cascade: true,
  })
  public mainLocal: MainLocal;
}
