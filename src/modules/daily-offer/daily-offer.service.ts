import { Injectable } from "@nestjs/common";
import { CreateDailyOfferDto } from "./dto/create-daily-offer.dto";
import { UpdateDailyOfferDto } from "./dto/update-daily-offer.dto";
import { DailyOffer } from "./entities/daily-offer.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DailyOfferService {
  constructor(
    @InjectRepository(DailyOffer)
    private readonly repository: Repository<DailyOffer>,
  ) {}
  async create(createdailyOfferDto: CreateDailyOfferDto) {
    const createdDailyOffer = await this.repository.create(createdailyOfferDto);
    const savedDailyOffer = await this.repository.save(createdDailyOffer);
    return savedDailyOffer;
  }

  async findAll() {
    return this.repository.find();
  }

  async findAllByLocalId(id: string) {
    let query = this.repository.createQueryBuilder("daily_offer").leftJoinAndSelect("daily_offer.products", "products");
    if (id) {
      query = query.where("daily_offer.mainLocalId = :id", { id: `${id}` });
    }
    return query.getMany() || [];
  }

  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateDailyOfferDto: UpdateDailyOfferDto) {
    const dailyOfferFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    const updatedDailyOffer = Object.assign(dailyOfferFromDatabase, updateDailyOfferDto);
    return this.repository.update(id, updatedDailyOffer);
  }

  async remove(id: string) {
    const backendDailyOffer = await this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(backendDailyOffer.id);
  }
}
