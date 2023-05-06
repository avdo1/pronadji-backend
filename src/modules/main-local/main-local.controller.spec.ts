import { Test, TestingModule } from '@nestjs/testing';
import { MainLocalController } from './main-local.controller';
import { MainLocalService } from './main-local.service';

describe('MainLocalController', () => {
  let controller: MainLocalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainLocalController],
      providers: [MainLocalService],
    }).compile();

    controller = module.get<MainLocalController>(MainLocalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
