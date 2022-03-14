import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportesProductosComponent } from './reportes-productos.component';

const routes: Routes = [
  { path: '',
  component: ReportesProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesProductosRoutes { }