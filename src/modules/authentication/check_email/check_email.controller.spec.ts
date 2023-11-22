import { Test, TestingModule } from '@nestjs/testing';
import { CheckEmailController } from './check_email.controller';

describe('CheckEmailController', () => {
  let controller: CheckEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckEmailController],
    }).compile();

    controller = module.get<CheckEmailController>(CheckEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
