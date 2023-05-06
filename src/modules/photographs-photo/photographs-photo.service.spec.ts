import { Test, TestingModule } from '@nestjs/testing';
import { PhotographsPhotoService } from './photographs-photo.service';

describe('PhotographsPhotoService', () => {
  let service: PhotographsPhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotographsPhotoService],
    }).compile();

    service = module.get<PhotographsPhotoService>(PhotographsPhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
