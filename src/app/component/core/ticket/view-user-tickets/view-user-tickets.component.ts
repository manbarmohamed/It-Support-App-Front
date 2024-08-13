import { Component, OnInit } from '@angular/core';
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
export class ViewUserTicketsComponent implements OnInit{
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketServiceService) {}

  ngOnInit(): void {
    this.loadUserTickets();
  }

  loadUserTickets() {
    this.ticketService.getTicketsByUser().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }

}
