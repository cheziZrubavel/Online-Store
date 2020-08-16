import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    // if no one logged in or user logged in, but his token expired:
    if ((!localStorage.getItem('user')) || (localStorage.getItem('user') && !this.auth.isAuthenticated())) {
        alert("Please login to continue!");
        this.router.navigate(['login']);
        return false;
      }
      // if user logged in, but he/she not admin:
      else if (JSON.parse(localStorage.getItem('user')).user[0].role !== 'admin') {
        alert("You don't have permission!");
        this.router.navigate(['login']);
        return false;
      }
      // if admin:
      return true;
    }
}