import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated = false;

  private authStatusListener  = new Subject<boolean>();
  constructor(
    private httpClient: HttpClient
  ) {
  }
  getIsAuth(){

    return this.isAuthenticated;

  }

  getAuthStatusListener(){

    return this.authStatusListener.asObservable();

  }
 
  authenticate(userName : any  , password : any) {
    
    var body = JSON.stringify({
       "email": userName , 
       "password": password})
    const headers = new HttpHeaders({
       'Content-Type': 'application/json'
       });

    return this.httpClient.post('http://localhost:8081/user/login', body, { headers: headers, responseType: 'text' }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', userName);
          sessionStorage.setItem('password', password);
          var role=userData.split("USERTYPE")
          sessionStorage.setItem('role', role[1]);
          sessionStorage.setItem('token', 'Bearer ' + role[0]);
       
        this.isAuthenticated = true;
        this.authStatusListener.next(true);


          console.log(userName)
          console.log(role[0])
          console.log(role[1])
          console.log(sessionStorage.getItem('token'))
          alert("Successful Login as "+role[1])
          return userData;

        }
       
      ))}
      
    
  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('token')
  }
}
