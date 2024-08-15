// src/app/services/panne.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PanneDto } from '../dto/panne-dto';
import { Panne } from '../model/panne';

@Injectable({
  providedIn: 'root',
})
export class PanneServiceService {
  private apiUrl = 'http://localhost:8000/'; // URL de l'API pour les pannes

  constructor(private http: HttpClient) {}

  createPanne(panneDto: PanneDto): Observable<PanneDto> {
    return this.http.post<PanneDto>(`${this.apiUrl}admin/savePanne`, panneDto);
  }

  updatePanne(id: number, panneDto: PanneDto): Observable<PanneDto> {
    return this.http.put<PanneDto>(`${this.apiUrl}admin/editPanne/${id}`, panneDto);
  }

  getAllPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(`${this.apiUrl}public/allPanne`);
  }
  getPanneById(id: number): Observable<PanneDto> {
    return this.http.get<PanneDto>(`${this.apiUrl}admin/getById/${id}`);
  }
  deletePanne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}admin/delPanne/${id}`);
  }
}
