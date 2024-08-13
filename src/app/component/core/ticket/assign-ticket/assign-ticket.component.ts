import { Component, NgModule, OnInit } from '@angular/core';
import { Ticket } from '../../../../model/ticket';
import { Technicien } from '../../../../model/technicien';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-ticket',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './assign-ticket.component.html',
  styleUrl: './assign-ticket.component.css'
})
export class AssignTicketComponent implements OnInit {
  assignTicketForm!: FormGroup;
  tickets: Ticket[] = [];
  technicians: Technicien[] = [];
  message = '';

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketServiceService,
    
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadTickets();
    this.loadTechnicians();
  }

  initializeForm() {
    this.assignTicketForm = this.fb.group({
      ticketId: [null, Validators.required],
      technicianId: [null, Validators.required]
    });
  }

  loadTickets() {
    this.ticketService.getAllTickets().subscribe(
      (tickets) => {
        this.tickets = tickets;
      },
      (error) => {
        this.message = 'Error loading tickets. Please try again.';
        console.error(error);
      }
    );
  }

  loadTechnicians() {
    this.ticketService.getAllTechnicians().subscribe(
      (technicians) => {
        this.technicians = technicians;
      },
      (error) => {
        this.message = 'Error loading technicians. Please try again.';
        console.error(error);
      }
    );
  }

  assignTicket() {
    if (this.assignTicketForm.valid) {
      const { ticketId, technicianId } = this.assignTicketForm.value;
      this.ticketService.assignTicketToTechnician(ticketId, technicianId).subscribe(
        (updatedTicket) => {
          this.message = `Ticket ${updatedTicket.id} has been assigned to Technician ${technicianId}.`;
          this.assignTicketForm.reset(); // Reset form after successful assignment
        },
        (error) => {
          this.message = 'Error assigning ticket. Please try again.';
          console.error(error);
        }
      );
    } else {
      this.message = 'Please select both a ticket and a technician.';
    }
  }

}
