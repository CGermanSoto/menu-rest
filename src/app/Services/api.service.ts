import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  agregarProducto(producto: any) {
    return this.http.post(`${this.apiUrl}/nuevo-producto`, producto);
  }

  traerTodosLosProductos(){
    return this.http.get<Producto[]>(`${this.apiUrl}/todos-los-productos`);
  }
  
  actualizarProducto(producto: Producto){
    return this.http.put<Producto>(`${this.apiUrl}/editar-producto`, producto);
  }

  eliminarProducto(id: number) {
    return this.http.post(`${this.apiUrl}/eliminar-producto?idProducto=${id}`, {});
  }  
}
