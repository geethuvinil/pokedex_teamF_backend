import { Test, TestingModule } from '@nestjs/testing';
import { CheckEmailService } from './check_email.service';

describe('CheckEmailService', () => {
  let service: CheckEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckEmailService],
    }).compile();

    service = module.get<CheckEmailService>(CheckEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
