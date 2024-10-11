import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';
import { OtrosComponent } from './components/otros/otros.component';

const routes: Routes = [
  { 
    path: '', component: AdministradorComponent, // Layout con el sidebar
    children: [
      { path: 'menu', component: MenuAdminComponent },  // Cambia solo el contenido a la derecha
      { path: 'contacto', component: DatosContactoComponent },
      { path: 'otros', component: OtrosComponent },
      // { path: '', redirectTo: 'menu', pathMatch: 'full' } // Redirigir a 'menu' por defecto
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
