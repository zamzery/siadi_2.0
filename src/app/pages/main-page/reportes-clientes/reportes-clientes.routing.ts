import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportesClientesComponent } from './reportes-clientes.component';

const routes: Routes = [
  { path: '',
  component: ReportesClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesClientesRoutes { }