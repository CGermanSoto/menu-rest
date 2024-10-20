import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { Producto } from '../../../../models/producto.interface';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css'],
  imports: [FormsModule]  // Agregar FormsModule aquí
})
export class NuevoProductoComponent {
  nombre: string = '';
  categoria: string = '';
  precio: number = 0;
  imagenBase64: string | ArrayBuffer | null = null;

  constructor(private apiService: ApiService) {}

  // Método para capturar la imagen seleccionada
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagenBase64 = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  // Método para enviar el nuevo producto al backend
  agregarProducto() {
    if (!this.imagenBase64) {
      console.error('Por favor selecciona una imagen');
      return;
    }

    const nuevoProducto: Producto = {
      productoId: 0,
      nombre: this.nombre,
      categoria: this.categoria,
      precio: this.precio,
      imagenBase64: this.imagenBase64.toString().split(',')[1]
    };

    this.apiService.agregarProducto(nuevoProducto).subscribe(
      response => {
        console.log('Producto guardado:', response);
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al guardar el producto:', error);
      }
    );
  }

  limpiarFormulario() {
    this.nombre = '';
    this.categoria = '';
    this.precio = 0;
    this.imagenBase64 = null;
  }
}
