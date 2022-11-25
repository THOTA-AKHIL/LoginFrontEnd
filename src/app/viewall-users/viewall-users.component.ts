import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewall-users',
  templateUrl: './viewall-users.component.html',
  styleUrls: ['./viewall-users.component.css']
})
export class ViewallUsersComponent implements OnInit {
  users:any=[];
  constructor(private userService:UserService,private router:Router ) { }

  ngOnInit() {
   this.getAll();
  }
  getAll() {
    this.userService.getAll().subscribe(data=>this.users=data);
  }}