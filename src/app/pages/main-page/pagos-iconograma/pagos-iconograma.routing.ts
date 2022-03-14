import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagosIconogramaComponent } from './pagos-iconograma.component';

const routes: Routes = [
  { path: '',
  component: PagosIconogramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosIconogramaRoutes { }