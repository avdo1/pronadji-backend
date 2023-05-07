import { User } from "src/modules/user/entities/user.entity";
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { RoleName } from "../dto/main-role.dto";

@Entity()
export class Role {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column("enum", {enum: RoleName})
    public roleName: RoleName;

    @OneToMany(() => User, (user) => user.role)
    public users: User[];
}
