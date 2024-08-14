import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanneEquipementService } from '../../../service/panne-equipement.service';

@Component({
  selector: 'app-panne-equipement',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './panne-equipement.component.html',
  styleUrl: './panne-equipement.component.css'
})
export class PanneEquipementComponent {


  panneForm: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private panneEquipementService: PanneEquipementService
  ) {
    this.panneForm = this.fb.group({
      panneId: ['', Validators.required],
      equipementId: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.panneForm.valid) {
      const { panneId, equipementId } = this.panneForm.value;
      this.panneEquipementService.signalerPanne(panneId, equipementId)
        .subscribe(
          response => {
            this.message = 'Panne signaled successfully';
          },
          error => {
            this.message = 'Error signaling panne';
          }
        );
    }
  }
}
