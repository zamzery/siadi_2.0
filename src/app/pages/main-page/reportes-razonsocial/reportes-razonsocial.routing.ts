import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportesRazonsocialComponent } from './reportes-razonsocial.component';

const routes: Routes = [
  { path: '',
  component: ReportesRazonsocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRazonsocialRoutes { }