import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonService } from '../../../../service/person.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  

  constructor(private personService: PersonService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.personService.getAllUsers().subscribe(
      (data) => (this.users = data),
      (error) => console.error('Error fetching users', error)
    );
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
      

      this.personService.addUser(userValues).subscribe(
        (user) => {
          this.users.push(user);
          this.userForm.reset();
        },
        (error) => console.error('Error adding user', error)
      );
      console.log(userValues.password+"  "+"   paaaaasssssssssss");
      
    }
  }}
