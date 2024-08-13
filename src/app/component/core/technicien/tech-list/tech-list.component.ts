import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Technicien } from '../../../../model/technicien';
import { PersonService } from '../../../../service/person.service';

@Component({
  selector: 'app-tech-list',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './tech-list.component.html',
  styleUrl: './tech-list.component.css'
})
export class TechListComponent implements OnInit{
  technicians: Technicien[] = [];
  technicianForm: FormGroup;
  
  constructor(private personService: PersonService, private fb: FormBuilder) {
    this.technicianForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  ngOnInit() {
    this.loadTechnicians();
  }

  loadTechnicians() {
    this.personService.getAllTechnicians().subscribe(
      (data) => (this.technicians = data),
      (error) => console.error('Error fetching technicians', error)
    );
  }

  addTechnician() {
    if (this.technicianForm.valid) {
      this.personService.addTechnician(this.technicianForm.value).subscribe(
        (technician) => {
          this.technicians.push(technician);
          this.technicianForm.reset();
        },
        (error) => console.error('Error adding technician', error)
      );
    }
  }
}
