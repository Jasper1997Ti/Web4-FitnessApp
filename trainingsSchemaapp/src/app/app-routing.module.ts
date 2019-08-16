import { TrainingsSchemaComponent } from './trainings-schema/trainings-schema/trainings-schema.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardGuard } from './user/auth-guard.guard';
import { AgmCoreModule } from '@agm/core';


const appRoutes: Routes = [
  {
    path: 'trainingsschema',
    canActivate: [AuthGuardGuard],
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
       {preloadingStrategy: PreloadAllModules}),

    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzS7kCsOYrjOhnZRqdqyofdCZW3w-xzY4'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
