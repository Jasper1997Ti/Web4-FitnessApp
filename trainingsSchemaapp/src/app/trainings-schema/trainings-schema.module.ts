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
import { TrainingsSchemaDetailComponent } from './trainings-schema-detail/trainings-schema-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'list', component: TrainingsSchemaComponent },
  { path: 'add', component: AddTrainingsSchemaComponent },
  { path: ':id', component: TrainingsSchemaDetailComponent}
]

@NgModule({
  declarations: [
  TrainingsSchemaComponent,
  ExerciseComponent,
  AddTrainingsSchemaComponent,
  TrainingsSchemaFilterPipe,
  TrainingsSchemaListComponent,
  TrainingsSchemaDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,    
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  
  providers: [HttpClientModule]
})
export class TrainingsSchemaModule { }
