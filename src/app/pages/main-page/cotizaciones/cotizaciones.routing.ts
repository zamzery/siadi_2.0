import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CotizacionesComponent } from './cotizaciones.component';

const routes: Routes = [
  { path: '',
  component: CotizacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotizacionesRoutes { }