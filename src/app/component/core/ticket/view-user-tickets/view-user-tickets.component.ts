import { Component } from '@angular/core';
import { Ticket } from '../../../../model/ticket';
import { SaveTicketDto } from '../../../../dto/save-ticket-dto';
import { Technicien } from '../../../../model/technicien';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-user-tickets',
  standalone: true,
  imports: [NgFor,RouterLink,FormsModule,CommonModule],
  templateUrl: './view-user-tickets.component.html',
  styleUrl: './view-user-tickets.component.css'
})
export class ViewUserTicketsComponent {
  tickets: Ticket[] = [];
  ticket: SaveTicketDto[] = [];
  techniciens: Technicien[] = [];
  selectedTechnicians: { [ticketId: number]: number } = {};

  constructor(private ticketService: TicketServiceService,
     private router: Router) {}

  ngOnInit(): void {
  //  this.loadTickets();
  }

  // loadTickets(): void {
  //   // Assuming you have a method to get tickets by userId or all tickets
  //   this.ticketService.getTicketsByUser(1).subscribe(
  //     (tickets) => {
  //       this.tickets = tickets;
  //     },
  //     (error) => {
  //       console.error('Error fetching tickets:', error);
  //     }
  //   );
  // }
  navigateToCreateTicket(): void {
    this.router.navigate(['/add-ticket']);
  }

  // resolveTicket(ticketId: number): void {
  //   this.ticketService.resolveTicket(ticketId).subscribe(
  //     (updatedTicket) => {
  //       this.ticket = this.tickets.map(ticket => ticket.id === ticketId ? updatedTicket : ticket);
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la résolution du ticket:', error);
  //     }
  //   );
  // }

  // assignToTechnician(ticketId: number): void {
  //   const technicianId = this.selectedTechnicians[ticketId];
  //   if (technicianId) {
  //     this.ticketService.assignTicketToTechnician(ticketId, technicianId).subscribe(
  //       (updatedTicket) => {
  //         this.ticket = this.tickets.map(ticket => ticket.id === ticketId ? updatedTicket : ticket);
  //       },
  //       (error) => {
  //         console.error('Erreur lors de l\'assignation du ticket:', error);
  //       }
  //     );
  //   } else {
  //     alert('Veuillez sélectionner un technicien.');
  //   }
  // }

}
