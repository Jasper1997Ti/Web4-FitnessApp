import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';
import { httpInterceptorProviders } from './interceptors';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MapsModule } from './maps/maps/maps.module';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';



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
    MapsModule,
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
