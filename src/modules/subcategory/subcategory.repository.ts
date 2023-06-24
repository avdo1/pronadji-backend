import { EntityRepository, Repository } from 'typeorm';
import { Subcategory } from './entities/subcategory.entity';

@EntityRepository(Subcategory)
export class SubcategoryRepository extends Repository<SubcategoryRepository> {
  protected tableName = 'subcategory';

}