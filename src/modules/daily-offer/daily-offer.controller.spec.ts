import { Test, TestingModule } from '@nestjs/testing';
import { DailyOfferController } from './daily-offer.controller';
import { DailyOfferService } from './daily-offer.service';

describe('DailyOfferController', () => {
  let controller: DailyOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyOfferController],
      providers: [DailyOfferService],
    }).compile();

    controller = module.get<DailyOfferController>(DailyOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
