import { Routes } from '@angular/router';
import { LoginComponent } from './component/core/login/login.component';
import { UserDashboardComponent } from './component/core/user-dashboard/user-dashboard.component';
import { TechDashboardComponent } from './component/core/tech-dashboard/tech-dashboard.component';
import { AdminDashboardComponent } from './component/core/admin-dashboard/admin-dashboard.component';
import { Role } from './enums/role';
import { authGuard } from './service/guard/auth-gaurd.guard';
import { EquipementListComponent } from './component/core/equipement/equipement-list/equipement-list.component';
import { AssignEquipmentComponent } from './component/core/equipement/assign-equipment/assign-equipment.component';
import { EquipmentFormComponent } from './component/core/equipement/equipment-form/equipment-form.component';
import { PanneListComponent } from './component/core/panne/panne-list/panne-list.component';
import { PanneFormComponent } from './component/core/panne/panne-form/panne-form.component';
import { AddTicketComponent } from './component/core/ticket/add-ticket/add-ticket.component';
import { ViewUserTicketsComponent } from './component/core/ticket/view-user-tickets/view-user-tickets.component';
import { ViewTicketsByTechnicianComponent } from './component/core/ticket/view-tickets-by-technician/view-tickets-by-technician.component';
import { TicketListComponent } from './component/core/ticket/ticket-list/ticket-list.component';
import { AssignTicketComponent } from './component/core/ticket/assign-ticket/assign-ticket.component';
import { UserListComponent } from './component/core/user/user-list/user-list.component';
import { TechListComponent } from './component/core/technicien/tech-list/tech-list.component';
import { HistoriqueEquipementComponent } from './component/core/historique-equipement/historique-equipement.component';
import { PanneEquipementComponent } from './component/core/panne-equipement/panne-equipement.component';
import { RegisterUserComponent } from './component/core/user/register-user/register-user.component';
import { RegisterTechComponent } from './component/core/technicien/register-tech/register-tech.component';
import { UserEquipementComponent } from './component/core/equipement/user-equipement/user-equipement.component';

export const routes: Routes = [
 
    { 
        path: 'admin', 
        component: AdminDashboardComponent, 
        canActivate: [authGuard], 
        data: { roles: Role[Role.ADMIN] } 
      },
      { 
        path: 'tech-dashboard', 
        component: TechDashboardComponent, 
        canActivate: [authGuard], 
        data: { roles: Role[Role.TECH] } 
      },
      { 
        path: 'user-dashboard', 
        component: UserDashboardComponent, 
        canActivate: [authGuard], 
        data: { roles: Role[Role.USER] } 
      },
       { path: 'login', component: LoginComponent },

    { path: 'equipment', component: EquipementListComponent,canActivate: [authGuard] },
   { path: 'add-equipment', component: EquipmentFormComponent ,canActivate: [authGuard]},
   { path: 'edit-equipment/:id', component: EquipmentFormComponent ,canActivate: [authGuard]},
  { path: 'assign-equipment', component: AssignEquipmentComponent ,canActivate: [authGuard]},


  { path: 'pannes', component: PanneListComponent,canActivate: [authGuard] },
  // //{ path: 'panne/:id', component: PanneDetailComponent },
   { path: 'edit-panne/:id', component: PanneFormComponent,canActivate: [authGuard] },
{ path: 'create-panne', component: PanneFormComponent ,canActivate: [authGuard]},
  // { path: '', redirectTo: '/pannes', pathMatch: 'full' },


   { path: 'list', component: TicketListComponent ,canActivate: [authGuard]},
   { path: 'asign', component: AssignTicketComponent ,canActivate: [authGuard]},
   { path: 'view-tickets', component: ViewUserTicketsComponent ,canActivate: [authGuard]},
  { path: 'view-tickets-by-technician', component: ViewTicketsByTechnicianComponent ,canActivate: [authGuard]},
   { path: 'add-ticket', component: AddTicketComponent ,canActivate: [authGuard]},
   { path: 'add-tech', component: RegisterTechComponent ,canActivate: [authGuard]},
  // { path: '', redirectTo: '/list', pathMatch: 'full'}

{ path: 'signal-panne', component: PanneEquipementComponent ,canActivate: [authGuard]},
  { path: 'histo', component: HistoriqueEquipementComponent ,canActivate: [authGuard]},
  { path: 'user-eq', component: UserEquipementComponent ,canActivate: [authGuard]},

  { path: 'add-user', component: RegisterUserComponent ,canActivate: [authGuard]},
  { path: 'admin', component: AdminDashboardComponent ,canActivate: [authGuard]},
  { path: 'users', component: UserListComponent ,canActivate: [authGuard]},
  { path: 'technicians', component: TechListComponent ,canActivate: [authGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to users by default
  { path: '**', redirectTo: '/login' },

  
];
