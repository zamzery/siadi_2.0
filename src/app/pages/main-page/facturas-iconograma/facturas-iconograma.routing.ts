import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacturasIconogramaComponent } from './facturas-iconograma.component';

const routes: Routes = [
  { path: '',
  component: FacturasIconogramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasIconogramaRoutes { }