import { Component, OnInit } from '@angular/core';
import { User } from '../../../../model/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonService } from '../../../../service/person.service';
import { NgFor } from '@angular/common';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NavbarComponent, SidebarComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  

  constructor(private personService: PersonService, private fb: FormBuilder, private router: Router) {
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
    this.router.navigate(['add-user'])
  }}
