import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  standalone: true,
  selector: 'app-view-tickets-by-technician',
  imports: [NgFor, NgIf, NgClass, NavbarComponent, SidebarComponent],
  templateUrl: './view-tickets-by-technician.component.html',
  styleUrls: ['./view-tickets-by-technician.component.css']
})
export class ViewTicketsByTechnicianComponent implements OnInit {
  tickets: any[] = [];
  technicianId!: number;

  constructor(private ticketService: TicketServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.technicianId = +params['technicianId'];
      this.loadTickets();
    });
   }

  loadTickets(): void {
    this.ticketService.getTicketsByTechnicien().subscribe(
      response => {
        this.tickets = response;
      },
      error => {
        console.error('Error fetching technician tickets', error);
      }
    );
  }
  resolveTicket(ticketId: number) {
    this.ticketService.resolveTicket(ticketId).subscribe(() => {
      this.loadTickets(); // Reload the ticket list after resolving
    });
  }
}
