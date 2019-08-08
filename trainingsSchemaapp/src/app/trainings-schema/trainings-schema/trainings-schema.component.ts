import { Component, Input, OnInit } from '@angular/core';
import { TrainingsSchema } from '../trainingsSchema.model';

@Component({
  selector: 'app-trainings-schema',
  templateUrl: './trainings-schema.component.html',
  styleUrls: ['./trainings-schema.component.css']
})
export class TrainingsSchemaComponent implements OnInit {

  @Input() public trainingsSchema: TrainingsSchema;

  constructor() {

   }

  ngOnInit() {
  }

}
