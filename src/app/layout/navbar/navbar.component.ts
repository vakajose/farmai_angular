import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  USERNAME: string | null = null;

  constructor(private router: Router, private authService: AuthService) { 
   
  }

  ngOnInit() {
    this.USERNAME = this.authService.getUsername();

  }

  onLogout() {
    // Lógica para cerrar sesión
    console.log('Usuario deslogueado');
    this.authService.logout();
    this.router.navigate(['/login']); // Navega a la ruta de login
  }

}
