import { Test, TestingModule } from "@nestjs/testing";
import { PhotographsPhotoController } from "./photographs-photo.controller";
import { PhotographsPhotoService } from "./photographs-photo.service";

describe("PhotographsPhotoController", () => {
  let controller: PhotographsPhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotographsPhotoController],
      providers: [PhotographsPhotoService],
    }).compile();

    controller = module.get<PhotographsPhotoController>(PhotographsPhotoController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
