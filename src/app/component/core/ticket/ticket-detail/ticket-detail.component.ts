import { Component } from '@angular/core';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../../../../model/ticket';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ticket-detail.component.html',
  styleUrl: './ticket-detail.component.css'
})
export class TicketDetailComponent {
  ticket: Ticket | null = null;

  constructor(private ticketService: TicketServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const ticketId = +this.route.snapshot.paramMap.get('id')!;
    this.ticketService.findTicketById(ticketId).subscribe(
      (ticket) => {
        this.ticket = ticket;
      },
      (error) => {
        console.error('Error fetching ticket:', error);
      }
    );
  }
}
