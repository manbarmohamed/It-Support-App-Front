import { Injectable } from '@angular/core';
import { Ticket } from '../model/ticket';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Technicien } from '../model/technicien';
import { SaveTicketDto } from '../dto/save-ticket-dto';
import { TicketDto } from '../dto/ticket-dto';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  private apiUrl = 'http://localhost:8000'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/user/allTicket`);
  }

  getTicketsByUserId(userId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/user/ticketByUserId/${userId}`);
  }

  assignTicketToTechnician(ticketId: number, technicianId: number): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/admin/assignTicketToTech/${ticketId}/${technicianId}`, {});
  }

  resolveTicket(ticketId: number): Observable<TicketDto> {
    return this.http.put<TicketDto>(`${this.apiUrl}/tech/${ticketId}/resolve`, {});
  }

  saveTicket(ticket: SaveTicketDto): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/user/save`, ticket);
  }
}
