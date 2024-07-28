import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ParcelaCreate, ParcelaResponse } from '../models/parcela.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createParcela(parcelaData: ParcelaCreate): Observable<ParcelaResponse> {
    return this.http.post<ParcelaResponse>(`${this.apiUrl}/parcelas/create`, parcelaData);
  }

  getParcela(usuarioId: string, parcelaId: string): Observable<ParcelaResponse> {
    return this.http.get<ParcelaResponse>(`${this.apiUrl}/parcelas/${usuarioId}/${parcelaId}`);
  }

  deleteParcela(usuarioId: string, parcelaId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/parcelas/${usuarioId}/${parcelaId}`);
  }

  updateParcela(usuarioId: string, parcelaId: string, parcelaData: ParcelaCreate): Observable<ParcelaResponse> {
    return this.http.put<ParcelaResponse>(`${this.apiUrl}/parcelas/${usuarioId}/${parcelaId}`, parcelaData);
  }

  getAllParcelas(usuarioId: string): Observable<ParcelaResponse[]> {
    return this.http.get<ParcelaResponse[]>(`${this.apiUrl}/parcelas/${usuarioId}`);
  }
}
