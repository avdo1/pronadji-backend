import { Test, TestingModule } from '@nestjs/testing';
import { MainLocalService } from './main-local.service';

describe('MainLocalService', () => {
  let service: MainLocalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainLocalService],
    }).compile();

    service = module.get<MainLocalService>(MainLocalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
