import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl='http://localhost:8000'

  constructor(private http : HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/allTicket`);
  }
}
