import { Injectable } from '@nestjs/common';
import * as environmentQuestions from './data/questions_environment.json';

@Injectable()
export class EnvironmentQuestionsService {
  questions = environmentQuestions;

  #getFiveQuestions(): any {
    return this.questions
      .sort(() => Math.random() - Math.random())
      .slice(0, 5)
      .map((question) => {
        const randomQuestion = JSON.parse(JSON.stringify(question));

        randomQuestion.answers.forEach((answer) => {
          delete answer.isCorrect;
        });

        return randomQuestion;
      });
  }

  getQuestions(): any {
    return this.#getFiveQuestions();
  }
}
