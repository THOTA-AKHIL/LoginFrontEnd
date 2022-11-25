import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  UserRole=false;
  AdminRole=false;
  invalidLogin=false;

  constructor(public loginService:AuthenticationService) {}

  ngOnInit(): void {
    (this.loginService.getAuthStatusListener().subscribe(

      (data:any) => {

        var role=sessionStorage.getItem('role')?.toLowerCase()

        if(role=="user"){

          this.UserRole = true;

        }

        else if(role == "admin"){

          this.AdminRole = true;

        }

        else{
          alert('userName and password is correct')

        }
        this.invalidLogin = false

      },
      (error:any) => {

        this.invalidLogin = true

      }
    ))
  }
}
