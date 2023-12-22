import { Test, TestingModule } from '@nestjs/testing';
import { ResendOtp } from './resend_otp.service';

describe('ResendOtpService', () => {
  let service: ResendOtp;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResendOtp],
    }).compile();

    service = module.get<ResendOtp>(ResendOtp);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
