import { Component } from '@angular/core';
import { NombreCategoriaComponent } from "../nombre-categoria/nombre-categoria.component";
import { ComidaComponent } from "../comida/comida.component";

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [NombreCategoriaComponent, ComidaComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponentComponent {

}
