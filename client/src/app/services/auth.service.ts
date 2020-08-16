import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public jwtHelper: JwtHelperService) { }
  
  public isAuthenticated(): boolean {
    if (localStorage.getItem('user')){
    const token = JSON.parse(localStorage.getItem('user')).token;
    // Check whether the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
    } 
  }
}