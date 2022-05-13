import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, switchMap, Observable } from 'rxjs';
import { appear } from 'src/app/animations/main/common.animations';
import { Quiz, QuizResponse } from 'src/app/interfaces/quiz-interfaces';

import { QuizService } from 'src/app/services/main-quiz.service';

@Component({
  selector: 'app-main-quiz.',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.scss'],
  animations: [appear],
})
export class QuizComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private readonly router: Router
  ) {}
  //Set First Question as 0;
  questionNumber: number = 0;
  //Rename Quiz to Question
  currentQuestion: Quiz;
  //All Quizes to load at the start
  quiz: Quiz[];
  currentResponse: QuizResponse | null = null;

  selectAnswer(answer: QuizResponse) {
    this.currentResponse = answer;
  }

  onSubmitClick() {
    if (this.currentResponse) {
      this.quizService.sendCurrentAnswer(this.currentResponse);
      this.currentResponse = null;
      //If next question does not exist, route to results
      if (this.questionNumber + 1 > this.quiz.length - 1) {
        this.router.navigate(['/quiz/results']);
      } else {
        //else, next question
        this.questionNumber++;
        this.currentQuestion = { ...this.quiz[this.questionNumber] };
      }
    }
  }

  ngOnInit(): void {
    //Get Entire quiz
    this.quizService.getQuizes().subscribe((quiz: Quiz[]) => {
      this.quiz = quiz;
      //set first question
      this.currentQuestion = this.quiz[this.questionNumber];
    });
  }
  //service which will tell us the number of avaiable quizes to show.
}
