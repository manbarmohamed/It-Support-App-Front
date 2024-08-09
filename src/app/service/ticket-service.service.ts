import { Injectable } from '@angular/core';
import { Ticket } from '../model/ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  constructor(private http :HttpClient) { }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>('http://localhost:8000/api/ticket/user/saveTicket', ticket);
  }

 
}
