import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrarAlmacenComponent } from './administrar-almacen.component';

const routes: Routes = [
  { path: '',
  component: AdministrarAlmacenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrarAlmacenRoutes { }