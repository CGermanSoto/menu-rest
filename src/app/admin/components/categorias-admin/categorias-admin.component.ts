import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { CategoriaService } from '../../../../app/Services/categoriaService.service';
import { Categoria } from '../../../models/categoria.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-categorias-admin',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],  // Agregar FormsModule aquí
  templateUrl: './categorias-admin.component.html',
  styleUrls: ['./categorias-admin.component.css']  // Corrige el nombre aquí, debería ser `styleUrls`
})
export class CategoriasAdminComponent {
  categoriaId?: number;
  nombre: string = '';
  categoriasList: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.traerTodasLasCategorias();
  }

  agregarCategoria() {
    console.log('Nombre ingresado:', this.nombre); // Agrega esta línea para verificar el nombre
    const nuevaCategoria: Categoria = {
      categoriaId: 0,
      categoria: this.nombre,
    };
  
    this.categoriaService.agregarCategoria(nuevaCategoria).subscribe(
      response => {
        this.categoriasList.push(nuevaCategoria);
        this.nombre = ''; // Limpia el campo del formulario
        console.log('Categoría guardada:', response);
      },
      error => {
        console.error('Error al guardar la categoría:', error);
      }
    );
  }

  habilitarEdicion(categoria: Categoria) {
    categoria.editando = true;
  }

  guardarEdicion(categoria: Categoria) {
    this.categoriaService.actualizarCategoria(categoria).subscribe(
      response => {
        categoria.editando = false;
        // Actualiza la lista local si es necesario
        const index = this.categoriasList.findIndex(c => c.categoriaId === categoria.categoriaId);
        if (index !== -1) {
          this.categoriasList[index] = categoria;
        }
        console.log('Categoría actualizada:', response);
      },
      error => {
        console.error('Error al actualizar la categoría:', error);
      }
    );
  }  

  eliminarCategoria(categoriaId: number) {
    this.categoriaService.eliminarCategoria(categoriaId).subscribe(
      response => {
        this.categoriasList = this.categoriasList.filter(c => c.categoriaId !== categoriaId);
        console.log('Categoría eliminada:', response);
      }
    );
  }

  traerTodasLasCategorias() {
    this.categoriaService.traerTodasLasCategorias().subscribe(
      (categorias: Categoria[]) => {
        this.categoriasList = categorias;
      },
      error => {
        console.error('Error al traer las categorías:', error);
      }
    );
  }
}
