import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';



@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
// userId:number=0;
// userName : string='';
users:any={
  id: undefined,
  firstName: '',
  lastName: '',

  contactNo: '',
  email: '',
  
  password: '',
  userType: ''
}



  constructor(private userservice: UserService,
    private activatedRoute: ActivatedRoute,
    private loginservice:AuthenticationService, 
  private router : Router){}
 ngOnInit(): void {
  this.userservice.viewProfileByName().subscribe((data:any)=>{
    this.users=data;
  },(error: any)=>console.log(error));
 }

}
