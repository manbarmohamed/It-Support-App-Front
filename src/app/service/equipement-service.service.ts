import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipementDto } from '../dto/equipement-dto';
import { Equipement } from '../model/equipement';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class EquipementServiceService {

  private apiUrl = 'http://localhost:8000/admin';

  constructor(private http: HttpClient) {}

  getAllEquipments(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiUrl}/allEquipment`);
  }

  getEquipmentById(id: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.apiUrl}/getEquipmentById/${id}`);
  }

  createEquipment(equipmentDto: EquipementDto): Observable<EquipementDto> {
    return this.http.post<EquipementDto>(`${this.apiUrl}/addEq`, equipmentDto);
  }

  updateEquipment(id: number, equipmentDto: EquipementDto): Observable<EquipementDto> {
    return this.http.put<EquipementDto>(`${this.apiUrl}/editEquipment/${id}`, equipmentDto);
  }

  deleteEquipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteEq/${id}`);
  }

  assignEquipmentToUser(equipmentId: number, userId: number): Observable<Equipement> {
    return this.http.post<Equipement>(`${this.apiUrl}/assignEqToUser/${equipmentId}/${userId}`, {});
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/allUsers`); // Ajustez le chemin selon votre API
  }
}
