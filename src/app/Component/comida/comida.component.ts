import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ApiService } from '../../Services/api.service';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-comida',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comida.component.html',
  styleUrl: './comida.component.css'
})
export class ComidaComponent {
  productosList:any = [];

  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.traerTodosLosProductos(); 
  }

  traerTodosLosProductos(): void {
    this.apiService.traerTodosLosProductos().subscribe(
      (data: Producto[]) => {
        this.productosList = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
