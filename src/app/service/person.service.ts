import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technicien } from '../model/technicien';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl='http://localhost:8000/admin'

  constructor(private http : HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/allUser`);
  }

  getAllTechnicians(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(`${this.apiUrl}/allTech`);
  }

  addUser(user: User): Observable<User> {    
    return this.http.post<User>(`${this.apiUrl}/addUser`, user);
  }

  addTechnician(technician: Technicien): Observable<Technicien> {
    return this.http.post<Technicien>(`${this.apiUrl}/addTech`, technician);
  }
}
