// src/app/components/assign-equipment/assign-equipment.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EquipementServiceService } from '../../../service/equipement-service.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { User } from '../../../model/user';

@Component({
  selector: 'app-assign-equipment',
  standalone: true,
  imports:[NgIf,NgFor,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './assign-equipment.component.html',
  styleUrls: ['./assign-equipment.component.css'],
})
export class AssignEquipmentComponent implements OnInit{
  assignForm: FormGroup;
  users: User[] = [];
  equipmentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private equipmentService: EquipementServiceService,
    private router: Router
  ) {
    this.assignForm = this.fb.group({
      equipmentId: ['', [Validators.required, Validators.min(1)]],
      userId: ['', [Validators.required, Validators.min(1)]],
    });
  }
  ngOnInit(): void {
    this.equipmentService.getAllUsers().subscribe((users) => {
      this.users = users}
  )}

  onSubmit(): void {
    if (this.assignForm.valid) {
      const { equipmentId, userId } = this.assignForm.value;
      this.equipmentService.assignEquipmentToUser(equipmentId, userId).subscribe(() => {
        // Optionally handle success
        this.router.navigate(['/equipment']);
      });
    }
  }

  onEquipmentIdChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.equipmentId = parseInt(input.value, 10);
  }
}
