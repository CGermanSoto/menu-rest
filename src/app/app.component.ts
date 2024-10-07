import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponentComponent } from "./Component/menu-component/menu.component";
import { NombreCategoriaComponent } from "./Component/nombre-categoria/nombre-categoria.component";
import { ComidaComponent } from "./Component/comida/comida.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponentComponent, NombreCategoriaComponent, ComidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menu-proyecto';
}
