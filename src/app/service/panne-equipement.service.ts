import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PanneEquipement } from '../model/panne-equipement';

@Injectable({
  providedIn: 'root'
})
export class PanneEquipementService {
  private baseUrl = 'http://localhost:8000'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  signalerPanne(panneId: number, equipementId: number): Observable<PanneEquipement> {
    return this.http.post<PanneEquipement>(`${this.baseUrl}/user/signal/${panneId}/${equipementId}`, {});
  }

  getHistorique(id: number): Observable<PanneEquipement[]> {
    return this.http.get<PanneEquipement[]>(`${this.baseUrl}/admin/historique/${id}`);
  }

  getByUser():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/user/ByUser`)
  }
}
