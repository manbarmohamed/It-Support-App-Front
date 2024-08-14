import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { StateComponent } from "../../shared/state/state.component";


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, StateComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
