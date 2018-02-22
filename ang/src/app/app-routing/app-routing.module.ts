
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { LoginFormComponent } from './../login-form/login-form.component';
import { MasterColorComponent } from './../master-color/master-color.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthguardGuard } from './../authguard.guard';
import { UserService } from './../user.service'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login-form', pathMatch: 'full' },
     { path: 'login-form', component: LoginFormComponent },
      // { path: 'login-form', component: LoginFormComponent },
      // { path: 'dashboard', component: AdminDashboard1Component },
       { path: 'master-color',  component: MasterColorComponent },
    // { path: 'dashboard', canActivate: [AuthguardGuard], component: AdminDashboard1Component }
     { path: 'dashboard', component: AdminDashboard1Component }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
