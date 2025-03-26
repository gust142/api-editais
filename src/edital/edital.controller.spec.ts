import { Test, TestingModule } from '@nestjs/testing';
import { EditalController } from './edital.controller';

describe('EditalController', () => {
  let controller: EditalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditalController],
    }).compile();

    controller = module.get<EditalController>(EditalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
