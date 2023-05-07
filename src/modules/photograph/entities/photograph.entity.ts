import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn} from "typeorm"

@Entity()
export class Photograph {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public photographDescription: string;

    @Column("date")
    public date: Date;
}
