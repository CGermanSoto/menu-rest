
import { RouterModule, Routes } from '@angular/router';
import { ComidaComponent } from './Component/comida/comida.component';
import { AdministradorComponent } from './Component/administrador/administrador.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'comida', component: ComidaComponent }, 
  {
    path: 'admin', component: AdministradorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}




