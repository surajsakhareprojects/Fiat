
import './../polyfills';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

// import { RouterModule, Routes } from '@angular/router';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LeftSideComponent } from './left-side-bar/left-side-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';

// interceptor for httpclient post method
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NoopInterceptor} from './admin-dashboard1/noop.interceptor';
// interceptor for httpclient post method

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





import {CdkTableModule} from '@angular/cdk/table';
import { LoginFormComponent } from './login-form/login-form.component';
// import {routes} from './app.routes';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';
import { MasterColorComponent } from './master-color/master-color.component';



@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class DemoMaterialModule {}


@NgModule({
  imports: [
       BrowserModule,
	AppRoutingModule,
    BrowserAnimationsModule,
	 DemoMaterialModule,
    FormsModule,
    HttpModule,
	HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
 declarations: [
    AdminDashboard1Component,
    AppComponent,
    HeaderComponent,
    LeftSideComponent,
    ContentComponent,
    FooterComponent,
    LoginFormComponent,
    MasterColorComponent
  ],
  entryComponents: [AppComponent],
 bootstrap: [AppComponent],
  providers: [
    UserService,
    AuthguardGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true,
  }]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);



/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
