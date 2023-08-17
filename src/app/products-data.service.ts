import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
 url = 'https://dummyjson.com/products/1';
  constructor(private http: HttpClient) {}

  products() {
    return this.http.get(this.url);
  }
}
