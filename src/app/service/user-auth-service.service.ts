import { Injectable } from '@angular/core';
import { Role } from '../enums/role';
import { HttpClient } from '@angular/common/http';
import { AuthRequestDTO } from '../dto/auth-request-dto';
import { JwtResponseDTO } from '../dto/jwt-response-dto';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8000/public/login', { username, password })
      .pipe(tap(response => {
        if (response && response.accessToken) {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('token', response.accessToken);
          this.currentUserSubject.next(response.user);
        }
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }
}
