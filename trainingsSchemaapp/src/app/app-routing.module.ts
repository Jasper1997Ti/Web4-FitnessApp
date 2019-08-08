import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrainingsSchemaComponent } from './trainings-schema/trainings-schema/trainings-schema.component';
import { AddTrainingsSchemaComponent } from './trainings-schema/add-trainings-schema/add-trainings-schema.component';
import { TrainingsSchemaDetailComponent } from './trainings-schema/trainings-schema-detail/trainings-schema-detail.component';

const appRoutes: Routes = [
  {
    path: 'trainingsschema',
    loadChildren: './trainings-schema/trainings-schema.module#TrainingsSchemaModule',
    data: { preload: true }
  },
  { path: '', redirectTo: 'trainingsschema/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
