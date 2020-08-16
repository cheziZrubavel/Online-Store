import { CartModel } from './../models/cart';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class cartsService {

  constructor(private http: HttpClient) { }
  
  public createNewCart(userId, token): Observable<CartModel>{
    
    const headerDict = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
  };

  const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
  };
    return this.http.post("http://localhost:3000/api/products/create-cart", userId, requestOptions);
  };
}
