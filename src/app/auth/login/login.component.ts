import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthFormComponent } from '../../shared/auth-form/auth-form.component';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  API_URL = environment.apiUrl

  constructor(private http: HttpClient, private router: Router) { }

  onLogin(formData: { username: string; password: string }) {
    this.http.post(`${this.API_URL}/auth/login`, formData).subscribe({
      next: response => {
        console.log('Usuario logueado correctamente', response);
        this.router.navigate(['/lands']);
      },
      error: error => {
        console.error('Error al loguear usuario', error);
      }
    });
  }

}
