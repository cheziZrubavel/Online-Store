import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  public user = JSON.parse(localStorage.getItem("user"));
  public getAllProducts(): Observable<ProductModel>{
    return this.http.get("http://localhost:3000/api/products/all-products");
  };
}
