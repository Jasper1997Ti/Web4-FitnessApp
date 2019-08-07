import { TrainingsSchema } from './../trainingsSchema.model';
import { Component, OnInit, Input } from '@angular/core';

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
