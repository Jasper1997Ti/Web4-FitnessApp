import { TrainingsSchemaListComponent } from './trainings-schema-list/trainings-schema-list.component';
import { TrainingsSchemaFilterPipe } from './trainings-schema-filter.pipe';
import { AddTrainingsSchemaComponent } from './add-trainings-schema/add-trainings-schema.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { TrainingsSchemaComponent } from './trainings-schema/trainings-schema.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
  TrainingsSchemaComponent,
  ExerciseComponent,
  AddTrainingsSchemaComponent,
  TrainingsSchemaFilterPipe,
  TrainingsSchemaListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,    
    ReactiveFormsModule
  ]
})
export class TrainingsSchemaModule { }
