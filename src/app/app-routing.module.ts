import { Component, NgModule, ViewChild } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { ViewallUsersComponent } from './viewall-users/viewall-users.component';



const routes:Routes =[

  
  { path: 'add-user', component: AddUserComponent },
  {path:'login', component:LoginComponent},
  {path:'viewall-users',component:ViewallUsersComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'header',component:HeaderComponent},
  {path:'logout',component:LogoutComponent},
  {path:'view profile',component:ViewComponentComponent}

  
];

@NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })


imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
