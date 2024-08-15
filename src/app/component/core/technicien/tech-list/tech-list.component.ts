import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Technicien } from '../../../../model/technicien';
import { PersonService } from '../../../../service/person.service';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NavbarComponent, SidebarComponent],
  templateUrl: './tech-list.component.html',
  styleUrl: './tech-list.component.css'
})
export class TechListComponent implements OnInit{
  technicians: Technicien[] = [];
  technicianForm: FormGroup;
  
  constructor(private personService: PersonService, private fb: FormBuilder,private router:Router) {
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
    
      this.router.navigate(['add-tech'])
    }
  }

