import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TicketServiceService } from '../../../../service/ticket-service.service'; // Remplacez par votre service réel
import { Equipement } from '../../../../model/equipement';  // Assurez-vous que vous avez un modèle Equipement
import { User } from '../../../../model/user';  // Assurez-vous que vous avez un modèle User
import { EquipementServiceService } from '../../../../service/equipement-service.service';
import { PersonService } from '../../../../service/person.service';
import { NgFor } from '@angular/common';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-equipment',
  standalone:true,
  imports: [ReactiveFormsModule, NgFor, NavbarComponent, SidebarComponent],
  templateUrl: './assign-equipment.component.html',
  styleUrls: ['./assign-equipment.component.css']
})
export class AssignEquipmentComponent implements OnInit {
  assignForm: FormGroup;
  equipments: Equipement[] = [];
  users: User[] = [];

  constructor(
    private equipementService: EquipementServiceService,
     private fb: FormBuilder,
    private personService: PersonService,
    private router: Router
    ) {
    this.assignForm = this.fb.group({
      equipment_id: [''],
      user_id: ['']
    });
  }

  ngOnInit(): void {
    this.loadEquipments();
    this.loadUsers();
  }

  loadEquipments(): void {
    this.equipementService.getAvailableEquipments().subscribe(
      (equipments) => {
        this.equipments = equipments;
      },
      (error) => {
        console.error('Error loading equipments', error);
      }
    );
  }

  loadUsers(): void {
    this.personService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error loading users', error);
      }
    );
  }

  onSubmit() {
    const equipmentId = this.assignForm.value.equipment_id;
    const userId = this.assignForm.value.user_id;
    
    this.equipementService.assignEquipmentToUser(equipmentId, userId).subscribe(
      () => {
        alert('Équipement assigner avec succès!');
          this.router.navigate(['/equipment']);
        this.assignForm.reset();
      },
      (error) => {
        console.error('Error assigning equipment', error);
      }
    );
  }
}
