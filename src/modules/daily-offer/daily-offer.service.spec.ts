import { Test, TestingModule } from "@nestjs/testing";
import { DailyOfferService } from "./daily-offer.service";

describe("DailyOfferService", () => {
  let service: DailyOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyOfferService],
    }).compile();

    service = module.get<DailyOfferService>(DailyOfferService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
