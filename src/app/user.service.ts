import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:object | undefined;
  constructor( private httpClient: HttpClient,private router:Router) { }
 
  getAll():Observable<User[]> {
    
    return this.httpClient.get<User[]>('http://localhost:8081/user/all')
    location.reload();
    
  
  }    

  insertData(formData:any){
    
    const headers = new HttpHeaders({
    
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      
    });

    var body = JSON.stringify({
      "firstName": formData.get('firstName').value,
      "lastName": formData.get('lastName').value,
      "contactNo": formData.get('contactNo').value,
      
      "email": formData.get('email').value,
      "password": formData.get('password').value,
      "userType":formData.get('userType').value,

        }) 
           this.httpClient.post('http://localhost:8081/user/registerUser', body, { headers: headers }).subscribe(
            (response: any) => {
              console.log(response);
              confirm('Confirm Submit')
              alert('Record inserted successfully')
              this.router.navigate(['login']);
            },
            error => {
              alert('userName already exist')
              console.log(error);
            }
           );

           
  }
  public viewProfileByName(){

    const headers = new HttpHeaders({
  
      'Content-Type': 'application/json',
  
      'Cache-Control': 'no-cache'
  
    });
  
    return this.httpClient.get('http://localhost:8081/user/view/'+ sessionStorage.getItem('email'), { headers: headers });
  
  }
}