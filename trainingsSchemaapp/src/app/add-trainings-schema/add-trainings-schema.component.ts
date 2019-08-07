import { TrainingsSchema } from './../trainingsSchema.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-trainings-schema',
  templateUrl: './add-trainings-schema.component.html',
  styleUrls: ['./add-trainings-schema.component.css']
})
export class AddTrainingsSchemaComponent implements OnInit {
  @Output() public newTrainingsSchema = new EventEmitter<TrainingsSchema>();
  constructor() {}

  ngOnInit() {}

  addTrainingsSchema(trainingsSchemaName: HTMLInputElement, trainingsSchemaCat: HTMLInputElement): boolean {
    const trainingsSchema = new TrainingsSchema(trainingsSchemaName.value, trainingsSchemaCat.value, []);
    this.newTrainingsSchema.emit(trainingsSchema);
    return false;
  }

}
