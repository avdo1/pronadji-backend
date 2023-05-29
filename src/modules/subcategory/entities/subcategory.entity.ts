import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MainLocal } from 'src/modules/main-local/entities/main-local.entity';
import { SubcatergoryName } from 'src/common/types/subcategory.types';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('text')
  public name: string;

  @ManyToOne(() => MainLocal, (mainLocal) => mainLocal, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public mainLocal: MainLocal;
}
