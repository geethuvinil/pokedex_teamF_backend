import { Test, TestingModule } from '@nestjs/testing';
import { ResendOtpService } from './resend-otp.service';

describe('ResendOtpService', () => {
  let service: ResendOtpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResendOtpService],
    }).compile();

    service = module.get<ResendOtpService>(ResendOtpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
