import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../../model/ticket';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { Router, RouterOutletContract } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [NgIf, NgFor, NavbarComponent, SidebarComponent,NgClass],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
    tickets: Ticket[] = [];
  
    constructor(private ticketService: TicketServiceService, private router: Router) {}
  
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

    addTicket(): void {
      this.router.navigate(['/add-ticket']);
    }
    assignerTicket(): void {
      this.router.navigate(['/asign']);
    }
}
