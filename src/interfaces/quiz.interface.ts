export interface Answer {
  id: number;
  answer: string;
}

export interface QuestionAndAnswers {
  id: number;
  question: string;
  answers: Answer[];
}

export interface UserAnswer {
  questionId: number;
  answerId?: number;
}
