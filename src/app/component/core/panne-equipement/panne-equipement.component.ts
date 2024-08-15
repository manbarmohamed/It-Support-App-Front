import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanneEquipementService } from '../../../service/panne-equipement.service';
import { PanneServiceService } from '../../../service/panne-service.service';
import { Panne } from '../../../model/panne';
import { EquipementDto } from '../../../dto/equipement-dto';
import { Equipement } from '../../../model/equipement';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-panne-equipement',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, NavbarComponent, SidebarComponent],
  templateUrl: './panne-equipement.component.html',
  styleUrl: './panne-equipement.component.css'
})
export class PanneEquipementComponent {


  panneForm: FormGroup;
  message = '';
  equipements:Equipement[]=[]
  pannes:Panne[]=[]

  constructor(
    private fb: FormBuilder,
    private panneEquipementService: PanneEquipementService,
    private panneService: PanneServiceService,
    private router : Router
  ) {
    this.panneForm = this.fb.group({
      panneId: ['', Validators.required],
      equipementId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadEquipement()
    this.loadPanne()
  }

  onSubmit() {
    if (this.panneForm.valid) {
      const { panneId, equipementId } = this.panneForm.value;
      this.panneEquipementService.signalerPanne(panneId, equipementId)
        .subscribe(
          (response) => {
            this.message = 'Panne signaled successfully';
            alert('Panne signaler avec succès!');
          this.router.navigate(['/user-eq']);
          },
          (error) => {
            this.message = 'Error signaling panne';
          }
        );
      }
  }

  loadEquipement():void{
    this.panneEquipementService.getByUser().subscribe(
      (equipments) => {
        this.equipements = equipments;
      },
      (error) => {
        console.error('Error loading equipments', error);
      }
    );
  }

  loadPanne():void{
    this.panneService.getAllPannes().subscribe(
      (pannes) => {
        this.pannes = pannes;
      },
      (error) => {
        console.error('Error loading equipments', error);
      }
    );
  }
}
