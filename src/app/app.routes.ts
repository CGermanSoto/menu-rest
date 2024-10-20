
import { RouterModule, Routes } from '@angular/router';
import { ComidaComponent } from './Component/comida/comida.component';
import { AdministradorComponent } from './admin/components/administrador-index/administrador.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'comida', component: ComidaComponent }, 
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}




