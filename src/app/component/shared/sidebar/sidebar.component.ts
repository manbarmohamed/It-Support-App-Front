import { Component } from '@angular/core';
import { Role } from '../../../enums/role';
import { UserAuthServiceService } from '../../../service/user-auth-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  role: Role | undefined;

  constructor(private authService: UserAuthServiceService) { }

  ngOnInit(): void {
    this.role = this.authService.getUserRole();
    //console.log(this.role?.toString() === Role[Role.ADMIN]);
    
  }

  isAdmin(): boolean {
    return this.role?.toString() === Role[Role.ADMIN];
  }
  isTechnician(): boolean {
    return this.role?.toString() === Role[Role.TECH];
  }
  isUser(): boolean {
    return this.role?.toString() === Role[Role.USER];
  }
}
