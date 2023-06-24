import { EntityRepository, Repository } from 'typeorm';
import { MainLocal } from './entities/main-local.entity';

@EntityRepository(MainLocal)
export class MainLocalRepository extends Repository<MainLocalRepository> {
  protected tableName = 'mainLocal';

}