import { Component, OnInit } from '@angular/core';
import { Equipement } from '../../../../model/equipement';
import { EquipementServiceService } from '../../../../service/equipement-service.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Route, Router } from '@angular/router';
import { NavbarComponent } from "../../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-user-equipement',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, NavbarComponent, SidebarComponent],
  templateUrl: './user-equipement.component.html',
  styleUrl: './user-equipement.component.css'
})
export class UserEquipementComponent implements OnInit {
  equipments: Equipement[] = [];

  constructor(private equipmentService: EquipementServiceService, private router : Router) {}

  ngOnInit(): void {
    this.equipmentService.getAllByUser().subscribe((data) => {
      this.equipments = data;
      console.log(this.equipments);
      
    });
  }
  signal():void{
    this.router.navigate(['/signal-panne']);

  }

}
