// src/app/components/panne-form/panne-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanneDto } from '../../../../dto/panne-dto';
import { PanneServiceService } from '../../../../service/panne-service.service';
import { CommonModule, NgIf } from '@angular/common';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-panne-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, CommonModule, NavbarComponent, SidebarComponent],
  templateUrl: './panne-form.component.html',
  styleUrls: ['./panne-form.component.css'],
})
export class PanneFormComponent implements OnInit {
  panneForm: FormGroup;
  panneId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private panneService: PanneServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.panneForm = this.fb.group({
      nom: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.panneId = this.route.snapshot.params['id'];

    if (this.panneId) {
      this.loadPanne(this.panneId);
    }
  }

  loadPanne(id: number): void {
    this.panneService.getPanneById(id).subscribe((panne)=>{
      this.panneForm.patchValue({
        nom: panne.nom
      })
    })
  }

  onSubmit(): void {
    if (this.panneForm.valid) {
      const panneDto: PanneDto = this.panneForm.value;
      if (this.panneId) {
        this.panneService.updatePanne(this.panneId, panneDto).subscribe(() => {
          alert('Panne mise à jour avec succès!');
          this.router.navigate(['/pannes']);
        });
      } else {
        this.panneService.createPanne(panneDto).subscribe(() => {
          alert('Panne créée avec succès!');
          this.router.navigate(['/pannes']);
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/pannes']);
  }
}
