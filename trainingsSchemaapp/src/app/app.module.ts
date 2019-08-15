import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrainingsSchemaModule } from './trainings-schema/trainings-schema.module';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './interceptors';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    // TrainingsSchemaModule,
     MaterialModule,
     AppRoutingModule
     
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
