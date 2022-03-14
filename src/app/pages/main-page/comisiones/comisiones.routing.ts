import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComisionesComponent } from './comisiones.component';

const routes: Routes = [
  { path: '',
  component: ComisionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComisionesRoutes { }