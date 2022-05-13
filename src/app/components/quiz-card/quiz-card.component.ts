import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quiz, QuizResponse } from 'src/app/interfaces/quiz-interfaces';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent implements OnInit {
  @Input() currentQuestion!: Quiz | null;
  @Input() currentResponse!: QuizResponse | null;

  @Output() chosenAnswer = new EventEmitter<QuizResponse>();
  answer: any;

  sendChoosenAnswer(index: number, optionId: number) {
    this.answer = {
      optionId: optionId,
      questionId: index,
    };
    this.chosenAnswer.emit(this.answer);
  }

  ngOnInit(): void {}
}
