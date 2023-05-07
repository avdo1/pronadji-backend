import { Gallery } from "src/modules/gallery/entities/gallery.entity";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public name: string;

    @Column("text")
    public description: string;

    @Column("integer")
    public enterPrice: number;

    @Column("boolean")
    public enterPriceConsumation: boolean;

    @Column("date")
    public startDate: Date;

    @Column("date")
    public entDate: Date;

    @Column({type: "timestamptz", default: () => "CURRENT_TIMESTAMP"})
    public startTime: Date;

    @Column({type: "timestamptz", default: () => "CURRENT_TIMESTAMP"})
    public endTime: Date;

    @ManyToOne(() => MainLocal, (mainLocal) => mainLocal.events, {
        onDelete: "CASCADE",
        cascade: true
    })
    public mainLocal: MainLocal;

    @OneToMany(() => Gallery, (gallery) => gallery.event)
    public gallerys: Gallery[];
}
