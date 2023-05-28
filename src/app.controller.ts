import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnvironmentQuestionsService } from './environmentQuestionsService';

@Controller()
export class AppController {
  constructor(
    private readonly environmentQuestionsService: EnvironmentQuestionsService,
  ) {}

  @Get('environment_questions')
  getEnvironmentQuestions(): any {
    return this.environmentQuestionsService.getQuestions();
  }

  @Post('environment_score')
  createMessage(@Body() message: any) {
    return this.environmentQuestionsService.checkAnswers(message);
  }
}
