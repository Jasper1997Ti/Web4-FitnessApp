import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainingsSchemaComponent } from './trainings-schema/trainings-schema.component';
import { ExerciseComponent } from './exercise/exercise.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import { AddTrainingsSchemaComponent } from './add-trainings-schema/add-trainings-schema.component';
import { TrainingsSchemaFilterPipe } from './trainings-schema-filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsSchemaComponent,
    ExerciseComponent,
    AddTrainingsSchemaComponent,
    TrainingsSchemaFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
     MatListModule,
     MatCardModule,
     MatIconModule,
     MatFormFieldModule,
     MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
