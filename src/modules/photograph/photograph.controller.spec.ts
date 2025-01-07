import { Test, TestingModule } from "@nestjs/testing";
import { PhotographController } from "./photograph.controller";
import { PhotographService } from "./photograph.service";

describe("PhotographController", () => {
  let controller: PhotographController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotographController],
      providers: [PhotographService],
    }).compile();

    controller = module.get<PhotographController>(PhotographController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
