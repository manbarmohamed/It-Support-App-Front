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

  private apiUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  getAllEquipments(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiUrl}admin/allEquipment`);
  }
  getAllByUser(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiUrl}user/ByUser`);
  }
  getAvailableEquipments(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiUrl}admin/available`);
  }

  getEquipmentById(id: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.apiUrl}admin/getEquipmentById/${id}`);
  }

  createEquipment(equipmentDto: EquipementDto): Observable<EquipementDto> {
    return this.http.post<EquipementDto>(`${this.apiUrl}admin/addEq`, equipmentDto);
  }

  updateEquipment(id: number, equipmentDto: EquipementDto): Observable<EquipementDto> {
    return this.http.put<EquipementDto>(`${this.apiUrl}admin/editEquipment/${id}`, equipmentDto);
  }

  deleteEquipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}admin/deleteEq/${id}`);
  }

  assignEquipmentToUser(equipmentId: number, userId: number): Observable<Equipement> {
    return this.http.post<Equipement>(`${this.apiUrl}admin/assignEqToUser/${equipmentId}/${userId}`, {});
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}admin/allUsers`);
  }
}
