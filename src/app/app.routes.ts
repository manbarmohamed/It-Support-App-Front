import { Routes } from '@angular/router';
import { LoginComponent } from './component/core/login/login.component';
import { UserDashboardComponent } from './component/core/user-dashboard/user-dashboard.component';
import { TechDashboardComponent } from './component/core/tech-dashboard/tech-dashboard.component';
import { AdminDashboardComponent } from './component/core/admin-dashboard/admin-dashboard.component';
import { Role } from './enums/role';
import { authGuard } from './service/guard/auth-gaurd.guard';
import { EquipementListComponent } from './component/core/equipement-list/equipement-list.component';
import { AssignEquipmentComponent } from './component/core/assign-equipment/assign-equipment.component';
import { EquipmentFormComponent } from './component/core/equipment-form/equipment-form.component';

export const routes: Routes = [
 
    // { 
    //     path: 'admin-dashboard', 
    //     component: AdminDashboardComponent, 
    //     canActivate: [authGuard], 
    //     data: { roles: Role[Role.ADMIN] } 
    //   },
    //   { 
    //     path: 'tech-dashboard', 
    //     component: TechDashboardComponent, 
    //     canActivate: [authGuard], 
    //     data: { roles: Role[Role.TECH] } 
    //   },
    //   { 
    //     path: 'user-dashboard', 
    //     component: UserDashboardComponent, 
    //     canActivate: [authGuard], 
    //     data: { roles: Role[Role.USER] } 
    //   },
    //   { path: 'login', component: LoginComponent },
     // { path: '', redirectTo: '/login', pathMatch: 'full' },

     { path: '', redirectTo: '/equipment', pathMatch: 'full' },
  { path: 'equipment', component: EquipementListComponent },
  { path: 'add-equipment', component: EquipmentFormComponent },
  { path: 'edit-equipment/:id', component: EquipmentFormComponent },
  { path: 'assign-equipment', component: AssignEquipmentComponent },
];
