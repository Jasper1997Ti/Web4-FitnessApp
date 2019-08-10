import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AddTrainingsSchemaComponent } from './add-trainings-schema/add-trainings-schema.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { TrainingsSchemaDetailComponent } from './trainings-schema-detail/trainings-schema-detail.component';
import { TrainingsSchemaFilterPipe } from './trainings-schema-filter.pipe';
import { TrainingsSchemaListComponent } from './trainings-schema-list/trainings-schema-list.component';
import { TrainingsSchemaComponent } from './trainings-schema/trainings-schema.component';
import { RatingComponent } from '../rating/rating.component';
import { TrainingsSchemaResolver } from './trainings-schema-resolver';

const routes: Routes = [
{ path: 'list', component: TrainingsSchemaComponent },
  { path: 'add', component: AddTrainingsSchemaComponent },
  { path: ':id', component: TrainingsSchemaDetailComponent, resolve: { trainingsSchema: TrainingsSchemaResolver}}
]

@NgModule({
  declarations: [
  TrainingsSchemaComponent,
  ExerciseComponent,
  AddTrainingsSchemaComponent,
  TrainingsSchemaFilterPipe,
  TrainingsSchemaListComponent,
  TrainingsSchemaDetailComponent,
  RatingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,    
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  
  providers: []
})
export class TrainingsSchemaModule { }
