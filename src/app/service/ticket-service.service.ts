import { Injectable } from '@angular/core';
import { Ticket } from '../model/ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TicketDto } from '../dto/ticket-dto';
import { Technicien } from '../model/technicien';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  createTicket(ticket: TicketDto, equipementId: number, panneId: number): Observable<TicketDto> {
    return this.http.post<TicketDto>(`${this.baseUrl}/user/saveTicket`, {
      ticket,
      equipementId,
      panneId,
    });
  }
  getTicketsByUser(userId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/user/ticketByUser/${userId}`);
  }
  getTicketsByTechnician(technicianId: number): Observable<TicketDto[]> {
    return this.http.get<TicketDto[]>(`${this.baseUrl}/tech/ticketByTechnician/${technicianId}`);
  }
  assignTicketToTechnician(ticketId: number, technicianId: number): Observable<TicketDto> {
    return this.http.post<TicketDto>(`${this.baseUrl}/admin/assignTicketToTech/${ticketId}/${technicianId}`, {});
  }
  resolveTicket(ticketId: number): Observable<TicketDto> {
    return this.http.put<TicketDto>(`${this.baseUrl}/tech/${ticketId}/resolve`, {});
  }
  findTicketById(ticketId: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/user/findById/${ticketId}`);
  } 
  getAllTechnicians(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(`${this.baseUrl}/admin/allTech`);
  }
}
