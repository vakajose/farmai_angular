import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './example/dashboard/dashboard.component';
import { LandsComponent } from './pages/lands/lands.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'example', component: DashboardComponent },
    { path: 'lands', component: LandsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
