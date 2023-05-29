import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { EnvironmentQuestionsService } from './environmentQuestionsService';
import { MitigationQuestionsService } from './mitigationQuestionsService';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [EnvironmentQuestionsService, MitigationQuestionsService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Questions service', () => {
    it('should return 5 environment questions', () => {
      expect(appController.getEnvironmentQuestions().length).toEqual(5);
    });
    it('should not have the isCorrect property for each question', () => {
      const questions = appController.getEnvironmentQuestions();

      questions.forEach((question) => {
        question.answers.forEach((answer) => {
          expect(answer.isCorrect).toBeUndefined();
        });
      });
    });
    it('should return 5 mitigation questions', () => {
      expect(appController.getMitigationQuestions().length).toEqual(5);
    });
  });
});
