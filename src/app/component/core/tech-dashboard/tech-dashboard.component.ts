import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-tech-dashboard',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './tech-dashboard.component.html',
  styleUrl: './tech-dashboard.component.css'
})
export class TechDashboardComponent {

}
