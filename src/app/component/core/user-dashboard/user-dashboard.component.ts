import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
