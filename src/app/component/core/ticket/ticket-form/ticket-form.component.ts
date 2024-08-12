import { Component } from '@angular/core';
import { TicketDto } from '../../../../dto/ticket-dto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../../../model/ticket';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [NgFor,NgIf,ReactiveFormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {

  ticketForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketServiceService,
    private router: Router
  ) {
    this.ticketForm = this.fb.group({
      description: ['', Validators.required],
      equipementId: ['', Validators.required],
      panneId: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticketDto: TicketDto = {
        description: this.ticketForm.value.description,
      };
      const equipementId = this.ticketForm.value.equipementId;
      const panneId = this.ticketForm.value.panneId;

      this.ticketService.createTicket(ticketDto, equipementId, panneId).subscribe(
        () => {
          this.router.navigate(['/tickets']);
        },
        (error) => {
          console.error('Error creating ticket:', error);
        }
      );
    }
  }
}
  


