import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacturasJlrComponent } from './facturas-jlr.component';

const routes: Routes = [
  { path: '',
  component: FacturasJlrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasJlrRoutes { }