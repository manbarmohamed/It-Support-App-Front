import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-view-tickets-by-technician',
  imports: [NgFor],
  templateUrl: './view-tickets-by-technician.component.html',
  styleUrls: ['./view-tickets-by-technician.component.css']
})
export class ViewTicketsByTechnicianComponent implements OnInit {
  // tickets: any[] = [];
  // technicianId!: number;

  // constructor(private ticketService: TicketServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.technicianId = +params['technicianId'];
  //     this.loadTickets();
  //   });
   }

  // loadTickets(): void {
  //   this.ticketService.getTicketsByTechnician(2).subscribe(
  //     response => {
  //       this.tickets = response;
  //     },
  //     error => {
  //       console.error('Error fetching technician tickets', error);
  //     }
  //   );
  // }
}
