import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered:true
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService { 

  public otpToken=new BehaviorSubject(this.setOtp);
  public passwordKey=new BehaviorSubject(this.setPasswordKey);
  public currentUser :Observable<User>
  private currentUserSubject: BehaviorSubject<User>
  // private baseURL = 'http://localhost:8080/api/user-management';
  private baseURL =  "api/"+environment.userManagement;

  set setOtp(value:any) {
    this.otpToken.next(value);
} 
set setPasswordKey(value:any) {
    this.passwordKey.next(value);
} 

  constructor( private http:HttpClient , private router:Router) {

    const userJson = localStorage.getItem('accessToken');
        this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('accessToken')!));
        this.currentUser = this.currentUserSubject.asObservable();


   }


//    public get currentUserValue(): User {
//     return this.currentUserSubject.value;
// }

login(email: string, password: string) {
  // console.log(email,password)
  console.log('logged')
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDIDRWPx_eyjjYcGegcDua_hz21G1vkfYE`, { email, password , returnSecureToken:true })
        .pipe(tap(user => {
            localStorage.setItem('accessToken', JSON.stringify(user.idToken));
            localStorage.setItem('refreshToken', JSON.stringify(user.refreshToken));
            localStorage.setItem('currentUserEmail', email);
            // this.currentUserSubject.next(Auth);
            this.router.navigate(['/land']);
            return user; 
        }),
        );
}


sign(email: string, password: string) {
  console.log('signed')
  // console.log(email,password)
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDIDRWPx_eyjjYcGegcDua_hz21G1vkfYE`, { email, password , returnSecureToken:true })
        // .pipe(tap(user => {
        //     localStorage.setItem('accessToken', JSON.stringify(user.result.accessToken));
        //     localStorage.setItem('refreshToken', JSON.stringify(user.result.refreshToken));
        //     localStorage.setItem('currentUserEmail', email);
        //     this.currentUserSubject.next(user);
        //     this.router.navigate(['/land']);
        //     return user; 
        // }),
        // );
}

}
