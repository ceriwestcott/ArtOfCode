import { Injectable } from '@angular/core';
import { quizMock } from '../Quizes';
import { Observable, of } from 'rxjs';
import { Quiz, QuizResponse, QuizResults } from '../interfaces/quiz-interfaces';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  Quizes$: Quiz[] = [];
  answers: QuizResponse[] = [];
  // finalTableData: QuizResults[] = [];
  finalTableData: any = of();

  constructor() {}

  getQuizes(): Observable<Quiz[]> {
    this.Quizes$ = quizMock;
    return of(this.Quizes$);
  }

  //Todo final quiz
  // take 1 quizResponse, modify the object and then put the object in
  //a different array,
  //everytime the user clicks, i push a value to the array, and I can

  getQuizTableDataFinal(): any {
    let tableData = this.answers.map((response: QuizResponse) => {
      debugger;
      return {
        id: response.questionId + 1,
        question: quizMock[response.questionId].question,
        choosenAnswer:
          quizMock[response.questionId].options[Number(response.optionId)],
        correctAnswer:
          quizMock[response.questionId].options[
            quizMock[response.questionId].answer
          ],
      };
    });
    return tableData;
  }

  // GET rid of the quizes that were already shown , never return them again

  sendCurrentAnswer(currentAnswer: QuizResponse): void {
    this.answers.push(currentAnswer);
  }

  //ToDo move to service - just a random array shuffling algo i found on stack
  shuffle(array: Quiz[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
