import { Component } from '@angular/core';
import { EquipementDto } from '../../../../dto/equipement-dto';
import { EquipementServiceService } from '../../../../service/equipement-service.service';
import { Router } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Equipement } from '../../../../model/equipement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-equipement-list',
  standalone: true,
  imports: [NgFor,NgIf, NgClass, NavbarComponent, SidebarComponent],
  templateUrl: './equipement-list.component.html',
  styleUrl: './equipement-list.component.css'
})
export class EquipementListComponent {

  equipments: Equipement[] = [];

  constructor(private equipmentService: EquipementServiceService, private router: Router) {}

  ngOnInit(): void {
    this.equipmentService.getAllEquipments().subscribe((data) => {
      this.equipments = data;
      console.log(this.equipments);
      
    });
  }
    
  deleteEquipment(id: number): void {
    this.equipmentService.deleteEquipment(id).subscribe(() => {
      this.equipments = this.equipments.filter(e => e.id !== id);
    });
  }

  editEquipment(id: number): void {
    this.router.navigate(['/edit-equipment', id]);
  }

  addEquipment(): void {
    this.router.navigate(['/add-equipment']);
  }
  assignerEquipment(): void {
    this.router.navigate(['/assign-equipment']);
  }

  assignEquipmentToUser(equipmentId: number, userId: string): void {
    if (!userId) {
      alert('Veuillez entrer un ID utilisateur valide.');
      return;
    }

    this.equipmentService.assignEquipmentToUser(equipmentId, +userId).subscribe(
      () => {
        // Optionally handle success
        alert('Équipement assigné avec succès!');
        this.equipmentService.getAllEquipments().subscribe((data) => {
          this.equipments = data;
        }); // Reload equipment list to reflect changes
      },
      (error) => {
        // Handle error
        alert('Erreur lors de l\'assignation de l\'équipement.');
      }
    );
  }

}
