import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisenoProduccionComponent } from './diseno-produccion.component';

const routes: Routes = [
  { path: '',
  component: DisenoProduccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisenoProduccionRoutes { }