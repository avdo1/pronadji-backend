import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { CategoryName } from "../dto/main-category.dto";
import { Product } from "src/modules/product/entities/product.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public description: string;

    @Column("enum", {enum: CategoryName})
    public categoryName: CategoryName;

    @OneToMany(() => Product, (product) => product.category)
    public products: Product[];
}
