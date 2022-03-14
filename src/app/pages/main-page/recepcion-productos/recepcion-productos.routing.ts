import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecepcionProductosComponent } from './recepcion-productos.component';

const routes: Routes = [
  { path: '',
  component: RecepcionProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepcionProductosRoutes { }