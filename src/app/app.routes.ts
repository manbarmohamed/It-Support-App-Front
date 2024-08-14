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
  //    { path: '', redirectTo: '/login', pathMatch: 'full' },

  //    { path: '', redirectTo: '/equipment', pathMatch: 'full' },
    { path: 'equipment', component: EquipementListComponent },
   { path: 'add-equipment', component: EquipmentFormComponent },
   { path: 'edit-equipment/:id', component: EquipmentFormComponent },
  { path: 'assign-equipment', component: AssignEquipmentComponent },


  { path: 'pannes', component: PanneListComponent },
  // //{ path: 'panne/:id', component: PanneDetailComponent },
  // { path: 'edit-panne/:id', component: PanneFormComponent },
  // { path: 'create-panne', component: PanneFormComponent },
  // { path: '', redirectTo: '/pannes', pathMatch: 'full' },


   { path: 'list', component: TicketListComponent },
   { path: 'asign', component: AssignTicketComponent },
  // { path: 'view-tickets', component: ViewUserTicketsComponent },
  // { path: 'view-tickets-by-technician/:technicianId', component: ViewTicketsByTechnicianComponent },
   { path: 'add-ticket', component: AddTicketComponent },
  // { path: '', redirectTo: '/list', pathMatch: 'full'}


  { path: 'add-user', component: RegisterUserComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'technicians', component: TechListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to users by default
  { path: '**', redirectTo: '/login' },

  { path: 'signal-panne', component: PanneEquipementComponent },
  { path: 'historique-equipement', component: HistoriqueEquipementComponent },
];
