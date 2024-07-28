import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { isClosedPolygon, ParcelaCreate, Punto } from '../../../models/parcela.model';
import { ParcelaService } from '../../../services/parcela.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  
  parcelaForm: FormGroup;
  ubicacion: Punto[] = [];
  mapOptions: google.maps.MapOptions = {
    center: { lat: -17.7822619, lng: -63.1850713 },
    zoom: 12
  };
  polygonPath: google.maps.LatLngLiteral[] = [];

  constructor(
    private fb: FormBuilder,
    private parcelaService: ParcelaService,
    private router: Router,
    private authService: AuthService
  ) { 
      this.parcelaForm = this.fb.group({
        nombre: ['', [Validators.required]],
        proximo_monitoreo: ['', [Validators.required]]
      });
  }

  ngOnInit(){
  }

  addPoint(event: google.maps.MapMouseEvent): void {
    if (event.latLng) {
      const punto: Punto = {
        latitude: event.latLng.lat(),
        longitude: event.latLng.lng()
      };
      this.ubicacion.push(punto);
      this.polygonPath.push({ lat: punto.latitude, lng: punto.longitude });
    }
  }

  clearPolygon(): void {
    this.ubicacion = [];
    this.polygonPath = [];
  }

  completePolygon(): void {
    if (this.polygonPath.length > 0) {
      this.polygonPath.push(this.polygonPath[0]);
      this.ubicacion.push(this.ubicacion[0]);
    }
  }

  back(): void {
    this.router.navigate(['/lands']); 
  }

  onSubmit(): void {
    if (this.parcelaForm.valid && isClosedPolygon(this.ubicacion)) {
      const parcelaData: ParcelaCreate = {
        ...this.parcelaForm.value,
        ubicacion: this.ubicacion,
        usuario_id: this.authService.getUsername() // Reemplaza con el ID del usuario actual
      };
     
      this.parcelaService.createParcela(parcelaData).subscribe(
        {
          next: response => {
            console.log('Parcela creada correctamente', response);
            this.router.navigate(['/lands']);
          },
          error: error => {
            console.error('Error al crear parcela', error);
          }
        }
      );
    } else {
      alert('Por favor, complete todos los campos y asegúrese de que el polígono está cerrado.');
    }
  }

}
