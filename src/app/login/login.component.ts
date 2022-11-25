import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
email: string = "";
password: string  = "";
invalidLogin = false

constructor(private router: Router,
  private loginservice: AuthenticationService,
  ) { }

ngOnInit() {
}
checkLogin() {
   (this.loginservice.authenticate(this.email, this.password).subscribe(
     data => {
      var role=sessionStorage.getItem('role')?.toLowerCase()
      if(role=='admin'){
        this.router.navigate(['admin-dashboard']);
      
      }
      else {
        this.router.navigate(['user-dashboard'])
      }
      
      
      this.invalidLogin = false
    },
    error => {
      alert("Please Register! This username does not exist")
      this.invalidLogin = true
      }     
   
    
  )
  );

}
}