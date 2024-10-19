import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ApiService } from '../../Services/api.service';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-comida',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css'] // Corrige el nombre aquí, `styleUrl` debería ser `styleUrls`
})
export class ComidaComponent {
  productosList: Producto[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.traerTodosLosProductos(); 
  }

  traerTodosLosProductos(): void {
    this.apiService.traerTodosLosProductos().subscribe(
      (data: Producto[]) => {
        this.productosList = data.map(producto => {
          const imageType = producto.imagenBase64?.startsWith('/') ? 'png' : 'jpeg';
          const imagenUrl = `data:image/${imageType};base64,${producto.imagenBase64}`;
          return {
            ...producto,
            imagenUrl: imagenUrl
          };
        });
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  
}
