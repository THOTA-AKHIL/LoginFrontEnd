import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
   
  firstName: string="";
  lastName: string=""
  contactNo:string=""
  password:string=""
  email:string=""
  userType:string=""
  form = new FormGroup({
    
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required,]),
    contactNo: new FormControl('',  [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    userType: new FormControl('', Validators.required),
  });
  
  constructor(private router: Router,private userservice: UserService) {

  }
  get f() {
    return this.form.controls;
  }
  submit() {
    if(!this.form.valid){
      alert("Enter all the fields")
    }else{
    this.userservice.insertData(this.form);
    }
    location.reload();
  }

  ngOnInit(): void {
    
  }

}