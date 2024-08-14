import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Equipement } from '../../../model/equipement';
import { PanneEquipement } from '../../../model/panne-equipement';
import { PanneEquipementService } from '../../../service/panne-equipement.service';
import { EquipementServiceService } from '../../../service/equipement-service.service';

@Component({
  selector: 'app-historique-equipement',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './historique-equipement.component.html',
  styleUrl: './historique-equipement.component.css'
})
export class HistoriqueEquipementComponent {


  equipementForm: FormGroup;
  equipements: Equipement[] = [];
  historique: PanneEquipement[] = [];

  constructor(
    private fb: FormBuilder,
    private panneEquipementService: PanneEquipementService,
    private equipementService: EquipementServiceService
  ) {
    this.equipementForm = this.fb.group({
      equipementId: ['']
    });
  }

  ngOnInit() {
    this.loadEquipements();
  }

  loadEquipements() {
    this.equipementService.getAllEquipments()
      .subscribe(
        data => {
          this.equipements = data;
        },
        error => {
          console.error('Error fetching equipements', error);
        }
      );
  }

  getHistorique() {
    const equipementId = this.equipementForm.get('equipementId')?.value;
    if (equipementId) {
      this.panneEquipementService.getHistorique(equipementId)
        .subscribe(
          data => {
            this.historique = data;
          },
          error => {
            console.error('Error fetching historique', error);
          }
        );
    } else {
      this.historique = [];
    }
  }
}
