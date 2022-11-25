import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user.service';
import { BasicAuthIncepterService } from './basic-auth-incepter.service';
import { HttpClientService } from './http-client.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewallUsersComponent } from './viewall-users/viewall-users.component';
import { HeaderComponent } from './header/header.component';
import { ViewComponentComponent } from './view-component/view-component.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ViewallUsersComponent,
    
    HeaderComponent,
    ViewComponentComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
