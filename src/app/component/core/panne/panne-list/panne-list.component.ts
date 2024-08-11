// src/app/components/panne-list/panne-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PanneServiceService } from '../../../../service/panne-service.service';
import { PanneDto } from '../../../../dto/panne-dto';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Panne } from '../../../../model/panne';

@Component({
  selector: 'app-panne-list',
  standalone: true,
  imports:[NgFor,RouterLink],
  templateUrl: './panne-list.component.html',
  styleUrls: ['./panne-list.component.css'],
})
export class PanneListComponent implements OnInit {
  pannes: Panne[] = [];
 

  constructor(private panneService: PanneServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadPannes();
  }

  loadPannes(): void {
    this.panneService.getAllPannes().subscribe((pannes) => {
      this.pannes = pannes;
      console.log(this.pannes+"................");
      
    });
  }

  deletePanne(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette panne ?')) {
      this.panneService.deletePanne(id).subscribe(() => {
        this.loadPannes();
      });
    }
  }

  editPanne(id: number): void {
    this.router.navigate(['/edit-panne', id]);
  }

  createPanne(): void {
    this.router.navigate(['/create-panne']);
  }
}
