import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Exercise } from './../exercise.model';
import { TrainingsSchemaDataService } from './../trainings-schema-data.service';
import { TrainingsSchema } from './../trainingsSchema.model';

function validateExerciseName(control: FormGroup) : { [key: string]: any } {
    if (
      control.get('sets').value.length >= 1 &&
      control.get('name').value.length < 2
    ) {
      return { setsNoName: true };
    }
    return null;
}

@Component({
  selector: 'app-add-trainings-schema',
  templateUrl: './add-trainings-schema.component.html',
  styleUrls: ['./add-trainings-schema.component.css']
})

export class AddTrainingsSchemaComponent implements OnInit {

  public trainingsSchema : FormGroup;

  constructor(private fb: FormBuilder, private _trainingsSchemaDataService : TrainingsSchemaDataService) {}

  get exercises() : FormArray {
    return <FormArray>this.trainingsSchema.get('exercises');
  }

  ngOnInit() {
    this.trainingsSchema = this.fb.group({
      name : ['', [Validators.minLength(2), Validators.required]],
      categorie: ['',[Validators.minLength(2), Validators.required]],
      exercises: this.fb.array([this.createExercises()])
    })

    this.exercises.valueChanges
    .pipe(
      debounceTime(400), 
      distinctUntilChanged())
      .subscribe(exList => {
        const lastElement = exList[exList.length - 1];
        if ( lastElement.name && lastElement.name.length > 2 ) { 
          this.exercises.push(this.createExercises()); 
        } else if (exList.length >= 2) {
          const secondToLast = exList[exList.length - 2];
          if (
            !lastElement.name &&
            !lastElement.sets &&
            !lastElement.reps &&
            (!secondToLast.name || secondToLast.name.length < 2)
          ) {
            this.exercises.removeAt(this.exercises.length - 1);
          }}
      });
  }

  createExercises(): FormGroup {
    return this.fb.group({
      name: [''],
      sets: [''],
      reps: ['']      
    },
  {validator: validateExerciseName});
  }

  onSubmit(){
    let exercises = this.trainingsSchema.value.exercises.map(Exercise.fromJSON);
    exercises = exercises.filter(ex => ex.name.length > 2);

    this._trainingsSchemaDataService.addNewTrainingsSchema(new TrainingsSchema(this.trainingsSchema.value.name, this.trainingsSchema.value.categorie, exercises )).subscribe();
  }

 /* addTrainingsSchema(trainingsSchemaName: HTMLInputElement, trainingsSchemaCat: HTMLInputElement): boolean {
    const trainingsSchema = new TrainingsSchema(trainingsSchemaName.value, trainingsSchemaCat.value, []);
    this.newTrainingsSchema.emit(trainingsSchema);
    return false;
  }*/
getErrorMessage(errors: any) {
  if (!errors) {
    return null;
  }
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
        characters (got ${errors.minlength.actualLength})`;
    } else if (errors.setsNoName) {
      return `if sets is set you must set a name`;
    }
  
}



}
