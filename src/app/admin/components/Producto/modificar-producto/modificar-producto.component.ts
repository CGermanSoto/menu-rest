import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../Services/api.service';
import { Producto } from '../../../../models/producto.interface'; // Ajusta la ruta según tu estructura
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-producto',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  productos: Producto[] = [];  // Lista de productos
  editableIndex: number[] = []; // Índices de productos editables

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.traerTodosLosProductos(); 
  }

  traerTodosLosProductos(): void {
    this.apiService.traerTodosLosProductos().subscribe(
      (data: Producto[]) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  editarProducto(index: number): void {
    if (this.editableIndex.includes(index)) {
      this.editableIndex = this.editableIndex.filter(i => i !== index); 
    } else {
      this.editableIndex.push(index); 
    }
  }

  eliminarProducto(productId: number): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este producto?');

    if (confirmacion) {
      // Llama al servicio que elimina el producto
      this.apiService.eliminarProducto(productId).subscribe(
        response => {
          console.log('Producto eliminado:', response);
          
          // Opcional: Remover el producto eliminado de la lista local de productos
          this.productos = this.productos.filter(producto => producto.productoId !== productId);
        },
        error => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  
  }

  // Método para guardar los cambios de todos los productos editados
  guardarCambios(): void {
    // Recorrer los productos que han sido editados
    for (const index of this.editableIndex) {
      const productoModificado = this.productos[index];

      // Llamar al servicio para actualizar cada producto editado
      this.apiService.actualizarProducto(productoModificado).subscribe(
        response => {
          console.log('Producto actualizado:', response);
        },
        error => {
          console.error('Error al actualizar el producto:', error);
        }
      );
    }
    
    // Limpiar la lista de índices editables después de guardar
    this.editableIndex = [];
  }


}
