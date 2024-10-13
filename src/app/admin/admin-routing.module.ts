import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador-index/administrador.component';
import { NuevoProductoComponent } from './components/Producto/nuevo-producto/nuevo-producto.component';
import { DatosContactoComponent } from './components/datosContacto-admin/datos-contacto.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { ModificarProductoComponent } from './components/Producto/modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './components/Producto/eliminar-producto/eliminar-producto.component';
import { CategoriasAdminComponent } from './components/categorias-admin/categorias-admin.component';


const routes: Routes = [
  { 
    path: '', component: AdministradorComponent, // Layout con el sidebar
    children: [
      { path: '', component: InicioAdminComponent },
      { path: 'nuevo-producto', component: NuevoProductoComponent }, 
      { path: 'modificar-producto', component: ModificarProductoComponent },
      { path: 'eliminar-producto', component: EliminarProductoComponent },
      {path: 'categoria', component: CategoriasAdminComponent },
      {path: 'datos', component: DatosContactoComponent },
      {path: 'servicio', component: ServicioComponent },
      { path: 'admin', redirectTo: 'admin', pathMatch: 'full' } // Redirigir a 'menu' por defecto
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
