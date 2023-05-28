import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnvironmentQuestionsService } from './environmentQuestionsService';
import { MitigationQuestionsService } from './mitigationQuestionsService';

@Controller()
export class AppController {
  constructor(
    private readonly environmentQuestionsService: EnvironmentQuestionsService,
    private readonly mitigationQuestionsService: MitigationQuestionsService,
  ) {}

  @Get('environment_questions')
  getEnvironmentQuestions(): any {
    return this.environmentQuestionsService.getQuestions();
  }

  @Post('environment_score')
  calculatEnvironmentScore(@Body() message: any) {
    return this.environmentQuestionsService.checkAnswers(message);
  }

  @Get('mitigation_questions')
  getMitigationQuestions(): any {
    return this.mitigationQuestionsService.getQuestions();
  }

  @Post('mitigation_score')
  calculatMitigationScore(@Body() message: any) {
    return this.mitigationQuestionsService.checkAnswers(message);
  }
}
