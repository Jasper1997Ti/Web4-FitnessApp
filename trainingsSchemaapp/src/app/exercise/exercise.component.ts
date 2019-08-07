import { Exercise } from '../exercise.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
@Input() exercise: Exercise;
  constructor() { }

  ngOnInit() {
  }

}
