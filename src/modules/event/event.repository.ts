import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Event)
export class EventRepository extends Repository<EventRepository> {
  protected tableName = 'event';

}