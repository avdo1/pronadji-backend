import { Category } from "src/modules/category/entities/category.entity";
import { DailyOffer } from "src/modules/daily-offer/entities/daily-offer.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column("text")
  public name: string;

  @Column("decimal")
  public price: number;

  @Column("text")
  public description: string;

  @ManyToOne(() => Category, category => category.products, {
    onDelete: "CASCADE",
    cascade: true,
  })
  public category: Category;

  @ManyToOne(() => DailyOffer, dailyOffer => dailyOffer.products, {
    onDelete: "CASCADE",
    cascade: true,
  })
  public dailyOffer: DailyOffer;
}
