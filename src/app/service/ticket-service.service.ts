import { Injectable } from '@angular/core';
import { Ticket } from '../model/ticket';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Technicien } from '../model/technicien';
import { SaveTicketDto } from '../dto/save-ticket-dto';
import { TicketDto } from '../dto/ticket-dto';
import { Equipement } from '../model/equipement';
import { Panne } from '../model/panne';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  private apiUrl = 'http://localhost:8000'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/user/allTicket`);
  }

  getTicketsByUser(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/user/ticketByUser`);
  }

  getTicketsByTechnicien(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/tech/ticketByTechnician`);
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
  getAllTechnicians(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(`${this.apiUrl}/admin/allTech`);
  }
  getAllPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(`${this.apiUrl}/admin/allPanne`);
  }
  getAllEquipments(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiUrl}/admin/allEquipment`);
  }   
}
