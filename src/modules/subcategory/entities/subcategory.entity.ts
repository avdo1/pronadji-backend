import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column("text")
  public name: string;

  @ManyToMany(() => MainLocal, mainLocals => mainLocals.subcategories)
  @JoinTable()
  public mainLocals: MainLocal[];
}
