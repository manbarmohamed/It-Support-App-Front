import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquipementServiceService } from '../../../../service/equipement-service.service';
import { ActivatedRoute, Router } from '@angular/router';

import { EquipementDto } from '../../../../dto/equipement-dto';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-equipment-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './equipment-form.component.html',
  styleUrl: './equipment-form.component.css'
})
export class EquipmentFormComponent implements OnInit {
  equipmentForm: FormGroup;
  equipmentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private equipmentService: EquipementServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.equipmentForm = this.fb.group({
      nome: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.equipmentId = this.route.snapshot.params['id'];

    if (this.equipmentId) {
      this.loadEquipment(this.equipmentId);
    }
  }

  loadEquipment(id: number): void {
    this.equipmentService.getEquipmentById(id).subscribe((equipment) => {
      this.equipmentForm.patchValue({
        nome: equipment.nome,
      });
    });
  }

  onSubmit(): void {
    if (this.equipmentForm.valid) {
      const equipmentDto: EquipementDto = this.equipmentForm.value;
      if (this.equipmentId) {
        this.equipmentService.updateEquipment(this.equipmentId, equipmentDto).subscribe(() => {
          alert('Équipement mis à jour avec succès!');
          this.router.navigate(['/equipment']);
        });
      } else {
        this.equipmentService.createEquipment(equipmentDto).subscribe(() => {
          alert('Équipement créé avec succès!');
          this.router.navigate(['/equipment']);
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/equipment']);
  }
}
