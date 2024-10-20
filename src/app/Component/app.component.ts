import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet  } from '@angular/router';
import { MenuComponentComponent } from "./menu-component/menu.component";
import { NombreCategoriaComponent } from "./nombre-categoria/nombre-categoria.component";
import { ComidaComponent } from "./comida/comida.component";
import { DatosComponent } from "./datos/datos.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app.routes';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MenuComponentComponent, 
    NombreCategoriaComponent, 
    ComidaComponent, 
    DatosComponent, 
    NavBarComponent, 
    NgIf
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'menu-proyecto';

  isAdminRoute: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAdminRoute = event.url.includes('/admin');
      }
    });
  }


}
