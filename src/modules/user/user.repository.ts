import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  protected tableName = 'user';
  async getUserById(id: string) {
    return this.findOne({ where: { id: id } });
  }
}