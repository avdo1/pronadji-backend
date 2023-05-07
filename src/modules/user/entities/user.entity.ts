import { MainLocal } from "src/modules/main-local/entities/main-local.entity";
import { Payment } from "src/modules/payments/entities/payment.entity";
import { Role } from "src/modules/role/entities/role.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public firstName: string;

    @Column("text")
    public lastName: string;

    @Column("text")
    public nickName: string;

    @Column("text")
    public email: string;

    @Column({type: 'varchar', nullable: false})
    public password: string;

    @ManyToOne(() => Role, (role) => role.users, {
        onDelete: "CASCADE",
        cascade: true
    })
    public role: Role;

    @OneToMany(() => MainLocal, (mainLocal) => mainLocal.user)
    public mainLocals: MainLocal[];

    @OneToMany(() => Payment, (payment) => payment.user)
    public payments: Payment[];
}
