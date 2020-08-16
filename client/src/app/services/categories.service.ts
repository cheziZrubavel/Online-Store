import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category';


@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getAllCategories(token): Observable<CategoryModel> {
    const headerDict = {
      'Authorization': `Bearer ${token}`
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get("http://localhost:3000/api/products/all-categories", requestOptions);
  };

}
