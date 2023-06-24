import { EntityRepository, Repository } from 'typeorm';
import { Photograph } from './entities/photograph.entity';

@EntityRepository(Photograph)
export class PhotographRepository extends Repository<PhotographRepository> {
  protected tableName = 'photograph';

}