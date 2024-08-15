import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TicketServiceService } from '../../../../service/ticket-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SaveTicketDto } from '../../../../dto/save-ticket-dto';
import { CommonModule, NgIf } from '@angular/common';
import { Equipement } from '../../../../model/equipement';
import { Panne } from '../../../../model/panne';
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { NavbarComponent } from "../../../shared/navbar/navbar.component";


@Component({
  standalone: true,
  selector: 'app-add-ticket',
  imports: [ReactiveFormsModule, CommonModule, SidebarComponent, NavbarComponent],
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit{
  ticketForm: FormGroup;

  pannes: Panne[] = [];
  equipments: Equipement[] = [];
  constructor(private ticketService: TicketServiceService, 
    private fb: FormBuilder,
  private router:Router) {
    this.ticketForm = this.fb.group({
      description: [''],
      panne_id: [''],
      equipement_id: [''],
    });
  }
  ngOnInit(): void {
   this.loadEquipments()
   this.loadPannes()
  }

  loadPannes(): void {
    this.ticketService.getAllPannes().subscribe(
      (pannes) => {
        this.pannes = pannes;
      },
      (error) => {
        console.error('Error loading users', error);
      }
    );
  }

  loadEquipments(): void {
    this.ticketService.getAllEquipments().subscribe(
      (equipments) => {
        this.equipments = equipments;
      },
      (error) => {
        console.error('Error loading equipments', error);
      }
    );
  }
  onSubmit() {
    const ticket: SaveTicketDto = this.ticketForm.value;
    console.log(ticket);
    
    this.ticketService.saveTicket(ticket).subscribe(
      (response) => {
        console.log('Ticket saved successfully', response);
        this.ticketForm.reset();
        alert('Ticket ajouter avec succès!');
          this.router.navigate(['/view-tickets']);
      },
      (error) => {
        console.error('Error saving ticket', error);
      }
    );
  }

}
