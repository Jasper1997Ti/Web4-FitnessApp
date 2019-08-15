import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingsSchema } from '../trainingsSchema.model';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { TrainingsSchemaDataService } from '../trainings-schema-data.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Exercise } from '../exercise.model';

// function validateExerciseName(control: FormGroup) : { [key: string]: any } {
//   if (
//     control.get('sets').value.length >= 1 &&
//     control.get('name').value.length < 2
//   ) {
//     return { setsNoName: true };
//   }
//   return null;
// }

@Component({
  selector: 'app-trainings-schema-detail',
  templateUrl: './trainings-schema-detail.component.html',
  styleUrls: ['./trainings-schema-detail.component.css']
})
export class TrainingsSchemaDetailComponent implements OnInit {
  public trainingsSchema: TrainingsSchema;

  constructor(private route: ActivatedRoute,private _trainingsSchemaDataService : TrainingsSchemaDataService) { }

  ngOnInit() {
    this.route.data.subscribe(item => (this.trainingsSchema = item['trainingsSchema']));
  }

//   public trainingsSchemaF : FormGroup;
//   public trainingsSchema: TrainingsSchema;

//   constructor(private fb: FormBuilder, private _trainingsSchemaDataService : TrainingsSchemaDataService, private route: ActivatedRoute) {}

//   get exercises() : FormArray {
//     return <FormArray>this.trainingsSchemaF.get('exercises');
//   }

//   ngOnInit() {
//     this.route.data.subscribe(item => (this.trainingsSchema = item['trainingsSchema']));

//     this.trainingsSchemaF = this.fb.group({
//       name : [this.trainingsSchema.name, [Validators.minLength(2), Validators.required]],
//       categorie: [this.trainingsSchema.categorie ,[Validators.minLength(2), Validators.required]],
//       exercises: this.fb.array([this.exercisesF()])
//     })

//     this.exercises.valueChanges
//     .pipe(
//       debounceTime(400), 
//       distinctUntilChanged())
//       .subscribe(exList => {
//         const lastElement = exList[exList.length - 1];
//         if ( lastElement.name && lastElement.name.length > 2 ) { 
//           this.exercises.push(this.exercisesF()); 
//         } else if (exList.length >= 2) {
//           const secondToLast = exList[exList.length - 2];
//           if (
//             !lastElement.name &&
//             !lastElement.sets &&
//             !lastElement.reps &&
//             (!secondToLast.name || secondToLast.name.length < 2)
//           ) {
//             this.exercises.removeAt(this.exercises.length - 1);
//           }}
//       });
//   }

//   exercisesF(): FormGroup {
//     for(let exercise of this.trainingsSchema.exercises)
//     {
//     return this.fb.group({
//       name: [exercise.name],
//       sets: [exercise.sets],
//       reps: [exercise.reps]},
//   {validator: validateExerciseName});
//     }}
  


//   onSubmit(){
//     let exercises = this.trainingsSchemaF.value.exercises.map(Exercise.fromJSON);
//     exercises = exercises.filter(ex => ex.name.length > 2);

//     this.trainingsSchema.name = this.trainingsSchemaF.value.name;
//     this.trainingsSchema.categorie = this.trainingsSchemaF.value.categorie;
//     this.trainingsSchema.exercises = exercises

//     this._trainingsSchemaDataService.updateTrainingsSchema(
//       this.trainingsSchema)}
  

//  /* addTrainingsSchema(trainingsSchemaName: HTMLInputElement, trainingsSchemaCat: HTMLInputElement): boolean {
//     const trainingsSchema = new TrainingsSchema(trainingsSchemaName.value, trainingsSchemaCat.value, []);
//     this.newTrainingsSchema.emit(trainingsSchema);
//     return false;
//   }*/
// getErrorMessage(errors: any) {
//   if (!errors) {
//     return null;
//   }
//     if (errors.required) {
//       return 'is required';
//     } else if (errors.minlength) {
//       return `needs at least ${errors.minlength.requiredLength} 
//         characters (got ${errors.minlength.actualLength})`;
//     } else if (errors.setsNoName) {
//       return `if sets is set you must set a name`;
//     }
  
// }

deleteTrainingsSchema(){
  this._trainingsSchemaDataService.deleteTrainingsSchema(this.trainingsSchema);
}
}
