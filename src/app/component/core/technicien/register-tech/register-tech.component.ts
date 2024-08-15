import { Component } from '@angular/core';
import { Technicien } from '../../../../model/technicien';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonService } from '../../../../service/person.service';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-register-tech',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent,ReactiveFormsModule],
  templateUrl: './register-tech.component.html',
  styleUrl: './register-tech.component.css'
})
export class RegisterTechComponent {
  technicianForm: FormGroup;
  
  constructor(private personService: PersonService, private fb: FormBuilder, private router:Router) {
    this.technicianForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  addTechnician() {
    if (this.technicianForm.valid) {
      this.personService.addTechnician(this.technicianForm.value).subscribe(
        () => {
          this.technicianForm.reset();
        },
        (error) => console.error('Error adding technician', error)
      );
    }
  }
}
