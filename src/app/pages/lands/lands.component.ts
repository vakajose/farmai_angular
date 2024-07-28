import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ParcelaService } from '../../services/parcela.service';
import { ParcelaResponse } from '../../models/parcela.model';
import { CommonModule } from '@angular/common';
import { LandCardComponent } from './land-card/land-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-lands',
  standalone: true,
  imports: [
    CommonModule,
    LandCardComponent,
    MatButtonModule,
    MatCard
  ],
  templateUrl: './lands.component.html',
  styleUrl: './lands.component.css'
})
export class LandsComponent {

  parcelas: ParcelaResponse[] = [];

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private parcelaService: ParcelaService) { }

  ngOnInit() {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/login']);
    }
    this.loadLands();
  }

  loadLands() {
    const username = this.authService.getUsername();
  
    if (username !== null) {
      this.parcelaService.getAllParcelas(username).subscribe({
        next: response => {
          console.log('Parcelas cargadas correctamente', response);
          this.parcelas = response;
        },
        error: error => {
          console.error('Error al cargar parcelas', error);
        }
      });
    }
  }

  createParcela(): void {
    this.router.navigate(['/lands/create']);
  }

  onDetail(parcela: ParcelaResponse): void {
    console.log('Detalle de parcela:', parcela);
    // Implementa la lógica para ver el detalle de la parcela
  }

  onHistory(parcela: ParcelaResponse): void {
    console.log('Histórico de parcela:', parcela);
    // Implementa la lógica para ver el histórico de la parcela
  }

  onAnalyze(parcela: ParcelaResponse): void {
    console.log('Analizar parcela:', parcela);
    // Implementa la lógica para analizar la parcela
  }

}
