import { Injectable } from '@nestjs/common';
import * as environmentQuestions from './data/questions_environment.json';
import { QuestionAndAnswers, UserAnswer } from './interfaces/quiz.interface';

@Injectable()
export class EnvironmentQuestionsService {
  questions = environmentQuestions;

  #getFiveQuestions(): QuestionAndAnswers[] {
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

  checkAnswers(userAnswers: UserAnswer[]): number {
    let score = 0;

    userAnswers.forEach((userAnswer: UserAnswer) => {
      const question = this.questions.find((q) => {
        return q.id === userAnswer.questionId;
      });

      if (question) {
        question.answers.forEach((answer) => {
          if (answer.id === userAnswer.answerId && answer.isCorrect) {
            score++;
          }
        });
      }
    });

    return score;
  }

  getQuestions(): QuestionAndAnswers[] {
    return this.#getFiveQuestions();
  }
}
