import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanneServiceService } from '../../../../service/panne-service.service';
import { SaveTicketDto } from '../../../../dto/save-ticket-dto';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-add-ticket',
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  ticketForm: FormGroup;

  constructor(private ticketService: TicketServiceService, private fb: FormBuilder) {
    this.ticketForm = this.fb.group({
      description: [''],
      panne_id: [''],
      equipement_id: [''],
    });
  }

  onSubmit() {
    const ticket: SaveTicketDto = this.ticketForm.value;
    this.ticketService.saveTicket(ticket).subscribe(
      (response) => {
        console.log('Ticket saved successfully', response);
        this.ticketForm.reset();
      },
      (error) => {
        console.error('Error saving ticket', error);
      }
    );
  }

}
