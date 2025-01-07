import { Injectable } from "@nestjs/common";
import { CreateJobOfferDto } from "./dto/create-job-offer.dto";
import { UpdateJobOfferDto } from "./dto/update-job-offer.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { JobOffer } from "./entities/job-offer.entity";
import { Repository } from "typeorm";

@Injectable()
export class JobOfferService {
  constructor(
    @InjectRepository(JobOffer)
    private readonly repository: Repository<JobOffer>,
  ) {}
  async create(createJobOfferDto: CreateJobOfferDto) {
    const createdJobOffer = await this.repository.create(createJobOfferDto);
    const savedJobOffer = await this.repository.save(createdJobOffer);
    return savedJobOffer;
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async findAllByLocalId(id: string) {
    let query = this.repository.createQueryBuilder("job_offer");
    if (id) {
      query = query.where("job_offer.mainLocalId = :id", { id: `${id}` });
    }
    return query.getMany() || [];
  }
  async update(id: string, updateJobOfferDto: UpdateJobOfferDto) {
    const jobOfferFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    const updatedJobOffer = Object.assign(jobOfferFromDatabase, updateJobOfferDto);
    return this.repository.update(id, updatedJobOffer);
  }

  async remove(id: string) {
    const jobOffer = await this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(jobOffer.id);
  }
}
