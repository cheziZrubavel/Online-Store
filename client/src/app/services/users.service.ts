import { UserModel } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  public postLoggedInUser(credentials: UserModel): Observable<UserModel[]> {
    return this.http.post<UserModel[]>("http://localhost:3000/api/auth/login", credentials);
  };

  public registerUser(userDetails: UserModel): Observable<UserModel[]> {
    return this.http.post<UserModel[]>("http://localhost:3000/api/auth/register", userDetails);
  };

  public checkIdentity(identity: {}): Observable<{}>{
    return this.http.post<{}>("http://localhost:3000/api/auth/check-identity", identity);
  }
}
