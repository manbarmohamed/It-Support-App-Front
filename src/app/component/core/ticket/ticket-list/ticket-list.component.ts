import { Component } from '@angular/core';
import { TicketDto } from '../../../../dto/ticket-dto';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Ticket } from '../../../../model/ticket';
import { Technicien } from '../../../../model/technicien';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [NgFor,RouterLink,FormsModule,CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  tickets: Ticket[] = [];
  ticket: TicketDto[] = [];
  techniciens: Technicien[] = [];
  selectedTechnicians: { [ticketId: number]: number } = {};

  constructor(private ticketService: TicketServiceService,
     private router: Router) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    // Assuming you have a method to get tickets by userId or all tickets
    this.ticketService.getTicketsByUser(1).subscribe(
      (tickets) => {
        this.tickets = tickets;
      },
      (error) => {
        console.error('Error fetching tickets:', error);
      }
    );
  }
  navigateToCreateTicket(): void {
    this.router.navigate(['/create-ticket']);
  }

  resolveTicket(ticketId: number): void {
    this.ticketService.resolveTicket(ticketId).subscribe(
      (updatedTicket) => {
        this.ticket = this.tickets.map(ticket => ticket.id === ticketId ? updatedTicket : ticket);
      },
      (error) => {
        console.error('Erreur lors de la résolution du ticket:', error);
      }
    );
  }

  assignToTechnician(ticketId: number): void {
    const technicianId = this.selectedTechnicians[ticketId];
    if (technicianId) {
      this.ticketService.assignTicketToTechnician(ticketId, technicianId).subscribe(
        (updatedTicket) => {
          this.ticket = this.tickets.map(ticket => ticket.id === ticketId ? updatedTicket : ticket);
        },
        (error) => {
          console.error('Erreur lors de l\'assignation du ticket:', error);
        }
      );
    } else {
      alert('Veuillez sélectionner un technicien.');
    }
  }
}
