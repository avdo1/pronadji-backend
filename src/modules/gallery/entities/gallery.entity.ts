import { Event } from "src/modules/event/entities/event.entity";
import { MainLocal } from "src/modules/main-local/entities/main-local.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

@Entity()
export class Gallery {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public name: string;

    @ManyToOne(() => MainLocal, (mainLocal) => mainLocal.gallerys, {
        onDelete: "CASCADE",
        cascade: true
    })
    public mainLocal: MainLocal;

    @ManyToOne(() => Event, (event) => event.gallerys, {
        onDelete: "CASCADE",
        cascade: true
    })
    public event: Event;
}
