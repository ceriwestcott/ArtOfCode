export interface QuizResults {
  id: number;
  question: string;
  choosenAnswer: string;
  correctAnswer: string;
}

export interface Quiz {
  id: number;
  question: string;
  options: Options[];
  answer: number;
}

export interface Options {
  id: number;
  answer: string;
}

export interface QuizResponse {
  questionId: number;
  optionId: string;
}
