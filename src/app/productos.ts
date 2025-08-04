import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {

   }

  getAll() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProducto(id: string) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

}
