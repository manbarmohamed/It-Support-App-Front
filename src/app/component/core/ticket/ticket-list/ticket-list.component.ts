import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../../model/ticket';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
    tickets: Ticket[] = [];
  
    constructor(private ticketService: TicketServiceService) {}
  
    ngOnInit(): void {
      this.loadTickets();
    }
  
    loadTickets() {
      this.ticketService.getAllTickets().subscribe((tickets) => {
        this.tickets = tickets;
      });
    }
  
    resolveTicket(ticketId: number) {
      this.ticketService.resolveTicket(ticketId).subscribe(() => {
        this.loadTickets(); // Reload the ticket list after resolving
      });
    }
}
