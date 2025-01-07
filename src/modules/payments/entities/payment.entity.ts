import { User } from "src/modules/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column("date")
  public fromDate: Date;

  @Column("date")
  public toDate: Date;

  @Column("text")
  public status: string;

  @Column("text")
  public paymentLevel: string;

  @ManyToOne(() => User, user => user.payments, {
    onDelete: "CASCADE",
    cascade: true,
  })
  public user: User;
}
