import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CategoriaService } from '../../../../app/Services/categoriaService.service';
import { Categoria } from '../../../models/categoria.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-categorias-admin',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf], 
  templateUrl: './categorias-admin.component.html',
  styleUrls: ['./categorias-admin.component.css']  
})
export class CategoriasAdminComponent {
  categoriasList: Categoria[] = [];
  editableIndex: number[] = [];  // Lista de índices que se pueden editar

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.traerTodasLasCategorias();
  }

  habilitarEdicion(index: number): void {
    if (this.editableIndex.includes(index)) {
      this.editableIndex = this.editableIndex.filter(i => i !== index); 
    } else {
      this.editableIndex.push(index); 
    }
  }

  guardarCambios(): void {
    for (const index of this.editableIndex) {
      const categoriaModificada = this.categoriasList[index];

      this.categoriaService.actualizarCategoria(categoriaModificada).subscribe(
        response => {
          console.log('Categoría actualizada:', response);
        },
        error => {
          console.error('Error al actualizar la categoría:', error);
        }
      );
    }
    
    // Limpiar los índices editables
    this.editableIndex = [];
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

  eliminarCategoria(categoriaId: number) {
    this.categoriaService.eliminarCategoria(categoriaId).subscribe(
      response => {
        this.categoriasList = this.categoriasList.filter(c => c.categoriaId !== categoriaId);
        console.log('Categoría eliminada:', response);
      }
    );
  }
}

