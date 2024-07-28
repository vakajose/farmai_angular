import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './example/dashboard/dashboard.component';
import { LandsComponent } from './pages/lands/lands.component';
import { MainComponent } from './layout/main/main.component';
import { CreateComponent } from './pages/lands/create/create.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'example', component: DashboardComponent },
    { path: '', component: MainComponent, children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'lands', component: LandsComponent },
        { path: 'lands/create', component: CreateComponent }
    ]}
    
];
