import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../../model/ticket';
import { SaveTicketDto } from '../../../../dto/save-ticket-dto';
import { Technicien } from '../../../../model/technicien';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-view-user-tickets',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, CommonModule, NavbarComponent, SidebarComponent],
  templateUrl: './view-user-tickets.component.html',
  styleUrl: './view-user-tickets.component.css'
})
export class ViewUserTicketsComponent implements OnInit{
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserTickets();
    console.log(this.loadUserTickets());
    
  }
  addTicket(): void {
    this.router.navigate(['/add-ticket']);
  }

  loadUserTickets() {
    this.ticketService.getTicketsByUser().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }

}
