import { EntityRepository, Repository } from 'typeorm';
import { JobOffer } from './entities/job-offer.entity';

@EntityRepository(JobOffer)
export class JobOfferRepository extends Repository<JobOfferRepository> {
  protected tableName = 'jobOffer';

}