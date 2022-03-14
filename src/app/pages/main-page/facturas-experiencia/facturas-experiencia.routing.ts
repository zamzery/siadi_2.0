import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacturasExperienciaComponent } from './facturas-experiencia.component';

const routes: Routes = [
  { path: '',
  component: FacturasExperienciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasExperienciaRoutes { }