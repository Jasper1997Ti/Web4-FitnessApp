import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
@Input() exercise: Exercise;
displayedColumns: string[] = ['name', 'sets', 'reps'];
dataSource : Observable<Exercise[]>;
  constructor() { }

  ngOnInit() {
  }

}
