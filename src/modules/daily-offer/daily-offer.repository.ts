import { EntityRepository, Repository } from 'typeorm';
import { DailyOffer } from './entities/daily-offer.entity';

@EntityRepository(DailyOffer)
export class DailyOfferRepository extends Repository<DailyOfferRepository> {
  protected tableName = 'dailyOffer';

}