import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.interface'

@Injectable({
    providedIn: 'root'
})

export class CategoriaService {
    private apiUrl = 'http://localhost:8080';
  
    constructor(private http: HttpClient) {}
  
    agregarCategoria(categoria: Categoria) {
      return this.http.post(`${this.apiUrl}/nueva-categoria`, categoria);
    }
  
    traerTodasLasCategorias(){
      return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
    }
    
    actualizarCategoria(categoria: Categoria){
      return this.http.put<Categoria>(`${this.apiUrl}/editar-categoria`, categoria);
    }
  
    eliminarCategoria(id: number) {
      return this.http.post(`${this.apiUrl}/eliminar-categoria?id=${id}`, {});
    }  
}