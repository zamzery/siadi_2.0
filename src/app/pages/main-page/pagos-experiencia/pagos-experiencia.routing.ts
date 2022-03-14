import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagosExperienciaComponent } from './pagos-experiencia.component';

const routes: Routes = [
  { path: '',
  component: PagosExperienciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosExperienciaRoutes { }