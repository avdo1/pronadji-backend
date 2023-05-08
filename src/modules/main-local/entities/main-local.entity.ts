import { DailyOffer } from "src/modules/daily-offer/entities/daily-offer.entity";
import { Event } from "src/modules/event/entities/event.entity";
import { Gallery } from "src/modules/gallery/entities/gallery.entity";
import { JobOffer } from "src/modules/job-offer/entities/job-offer.entity";
import { Subcategory } from "src/modules/subcategory/entities/subcategory.entity";
import { User } from "src/modules/user/entities/user.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";

@Entity()
export class MainLocal {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public name: string;

    @Column("text")
    public email: string;

    @Column("text")
    public phone: string;

    @Column("text")
    public location: string;

    @Column("text")
    public description: string;

    @Column("integer")
    public workingHours: number;

    @Column("text")
    public facebook: string;

    @Column("text")
    public instagram: string;

    @Column("text")
    public twitter: string;

    @OneToMany(() => Event, (event) => event.mainLocal)
    public events: Event[];

    @OneToMany(() => Gallery, (gallery) => gallery.mainLocal)
    public gallerys: Gallery[];

    @OneToMany(() => DailyOffer, (dailyOffer) => dailyOffer.mainLocal)
    public dailyOffers: DailyOffer[];

    @OneToMany(() => JobOffer, (jobOffer) => jobOffer.mainLocal)
    public jobOffers: JobOffer[];

    @ManyToOne(() => User, (user) => user.mainLocals, {
        onDelete: "CASCADE",
        cascade: true
    })
    public user: User;

    @OneToMany(() => Subcategory, (subcaterogy) => subcaterogy.mainLocal)
    public subcategories: Subcategory[];
}
