import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthFormComponent } from '../../shared/auth-form/auth-form.component';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  API_URL = environment.apiUrl ;

  constructor(private http: HttpClient, private router: Router) { }

  onRegister(formData: { username: string; password: string }) {
    this.http.post(`${this.API_URL}/auth/register`, formData).subscribe({
      next: response => {
        console.log('Usuario registrado correctamente', response);
        this.router.navigate(['/lands']);
      },
      error: error => {
        console.error('Error al registrar usuario', error);
      }
    });
  }
}
