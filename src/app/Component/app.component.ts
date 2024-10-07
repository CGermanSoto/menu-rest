import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponentComponent } from "./menu-component/menu.component";
import { NombreCategoriaComponent } from "./nombre-categoria/nombre-categoria.component";
import { ComidaComponent } from "./comida/comida.component";
import { DatosComponent } from "./datos/datos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponentComponent, NombreCategoriaComponent, ComidaComponent, DatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu-proyecto';
  public imageUrl: string = '../assets/images/logo.png';
}
