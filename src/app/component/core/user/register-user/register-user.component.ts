import { Component } from '@angular/core';
import { PersonService } from '../../../../service/person.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarComponent, SidebarComponent],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
 
  userForm: FormGroup;
  

  constructor(private personService: PersonService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const userValues=this.userForm.value
      console.log(userValues);
      // const user :User={
      //   id: 0,
      //   name: '',
      //   username:'',
      //   password:'',
      //   equipements: [],
      //   tickets: [],
      //   role:undefined
      // }

      // user.name=userValues.name;
      // user.username=userValues.username;
      // user.password=userValues.password;
      this.personService.addUser(userValues).subscribe();
      
    }
  }
}
