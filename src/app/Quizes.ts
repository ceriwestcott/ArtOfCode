import { Quiz } from './interfaces/quiz-interfaces';

export const quizMock: Quiz[] = [
  {
    id: 1,
    question: 'true + false',
    options: [
      { id: 0, answer: 'truefalse' },
      { id: 1, answer: '1' },
      { id: 2, answer: 'SyntaxError' },
    ],
    answer: 1,
  },
  {
    id: 2,
    question: '[1, 2, 3] + [4, 5, 6]',
    options: [
      { id: 0, answer: '1,2,3,4,5,6' },
      { id: 1, answer: '1,2,34,5,6' },
      { id: 2, answer: 'NaN' },
    ],
    answer: 1,
  },
  {
    id: 3,
    question: '0.2 + 0.1 === 0.3',
    options: [
      { id: 0, answer: 'true' },
      { id: 1, answer: 'false' },
      { id: 2, answer: 'NaN' },
    ],
    answer: 1,
  },
];
