  
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';

describe('AppController', () => {
  let appService: AppService;
  let logger: Logger;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppService],
      providers: [AppService, Logger],
    }).compile();

    appService = app.get<AppService>(AppService);
    logger = app.get<Logger>(Logger);
  });

  describe('getHello', () => {

    it('should return Hello World!', () => {
      expect(appService.getHello()).toBe('Hello World!')
    })
    
    it('should log Foobar!', () => {

      jest.spyOn(logger, 'log');

      appService.getHello();

      expect(logger.log).toHaveBeenCalledTimes(1);
      expect(logger.log).toHaveBeenCalledWith('Foobar!');
    })

  })
  
});
