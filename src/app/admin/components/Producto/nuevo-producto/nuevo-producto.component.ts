import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ApiService } from '../../../../Services/api.service'; 

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,   // Declarar el componente como standalone
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css'],
  imports: [FormsModule]  // Proveer FormsModule aquí
})
export class NuevoProductoComponent {
  nombre: string = '';
  categoria: string = '';

  constructor(private apiService: ApiService) {}

  agregarProducto() {
    const nuevoProducto = { nombre: this.nombre, categoria: this.categoria };
    this.apiService.agregarProducto(nuevoProducto).subscribe(response => {
      console.log('Producto guardado:', response);
    });
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.nombre = '';
    this.categoria = '';
  }
}

