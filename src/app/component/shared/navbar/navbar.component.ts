import { Component } from '@angular/core';
import { UserAuthServiceService } from '../../../service/user-auth-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userLogged: any;

  constructor(private userService: UserAuthServiceService) {
    // Initialize the userLogged value
    this.userLogged = this.userService.currentUserValue;
  }

  // Optionally, you can use a method to update the userLogged value
  updateUserLogged(): void {
    this.userLogged = this.userService.currentUserValue;
  }

  logout():void{
    this.userService.logout()
  }

}
