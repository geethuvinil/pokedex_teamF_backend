import { Test, TestingModule } from '@nestjs/testing';
import { ResendOtpController } from './resend-otp.controller';

describe('ResendOtpController', () => {
  let controller: ResendOtpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResendOtpController],
    }).compile();

    controller = module.get<ResendOtpController>(ResendOtpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
