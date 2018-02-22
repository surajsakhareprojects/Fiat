import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LeftSideComponent } from './left-side-bar/left-side-bar.component';

import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service'

export const router:Routes = [
    { path: '', redirectTo: 'login-form', pathMatch: 'full' },
    { path: 'login-form', component: LoginFormComponent },
    { path: 'dashboard',  canActivate: [AuthguardGuard], component: AdminDashboard1Component },
  ]

  export const routes: ModuleWithProviders = RouterModule.forRoot(router);