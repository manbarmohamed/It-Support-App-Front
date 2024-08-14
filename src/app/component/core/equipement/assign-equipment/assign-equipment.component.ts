import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TicketServiceService } from '../../../../service/ticket-service.service'; // Remplacez par votre service réel
import { Equipement } from '../../../../model/equipement';  // Assurez-vous que vous avez un modèle Equipement
import { User } from '../../../../model/user';  // Assurez-vous que vous avez un modèle User
import { EquipementServiceService } from '../../../../service/equipement-service.service';
import { PersonService } from '../../../../service/person.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-assign-equipment',
  standalone:true,
  imports:[ReactiveFormsModule,NgFor],
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
    private personService: PersonService
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
    this.equipementService.getAllEquipments().subscribe(
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
      (response) => {
        console.log('Equipment assigned successfully', response);
        this.assignForm.reset();
      },
      (error) => {
        console.error('Error assigning equipment', error);
      }
    );
  }
}
