import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: 'maps', component: MapsComponent },
];

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule,
    RouterModule.forChild(routes)
    
  ]
})
export class MapsModule { }
