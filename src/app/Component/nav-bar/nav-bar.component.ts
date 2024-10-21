import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriaService } from '../../Services/categoriaService.service'; // Asegúrate de la ruta correcta
import { Categoria } from '../../models/categoria.interface'; // Asegúrate de la ruta correcta
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class NavBarComponent implements OnInit {
  categorias: Categoria[] = []; // Propiedad para almacenar las categorías

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
    this.traerCategorias(); // Llama al método al inicializar el componente
  }

  traerCategorias() {
    this.categoriaService.traerTodasLasCategorias().subscribe(
      (data: Categoria[]) => {
        this.categorias = data; // Asigna las categorías recibidas a la propiedad
      },
      (error) => {
        console.error('Error al traer las categorías', error);
      }
    );
  }
}

