import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/shared/navbar/navbar.component";
import { SidebarComponent } from "./component/shared/sidebar/sidebar.component";
import { StateComponent } from "./component/shared/state/state.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, StateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'It-Support-App-Front';
}
