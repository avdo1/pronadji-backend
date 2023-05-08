import { JobOfferStatus } from "src/common/types/jobOffer.types";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";
import { Product } from "src/modules/product/entities/product.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

@Entity()
export class JobOffer {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public name: string;

    @Column("text")
    public email: string;

    @Column("text")
    public description: string;

    @Column("text")
    public phone: string;

    @Column("enum", {enum: JobOfferStatus})
    public status: JobOfferStatus;

    @OneToMany(() => Product, (product) => product.dailyOffer)
    public products: Product[];

    @ManyToOne(() => MainLocal, (mainLocal) => mainLocal.jobOffers, {
        onDelete: "CASCADE",
        cascade: true
    })
    public mainLocal: MainLocal;
}
