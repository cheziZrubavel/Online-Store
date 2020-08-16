import { OrderModel } from './../models/order';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  
  public getAllOrders(): Observable<OrderModel>{
    return this.http.get("http://localhost:3000/api/products/all-orders");
  };

  public getOrderByUser(userId): Observable<OrderModel>{
    return this.http.get("http://localhost:3000/api/products/order-by-user/"+ userId);
  };
}
