import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagosJlrComponent } from './pagos-jlr.component';

const routes: Routes = [
  { path: '',
  component: PagosJlrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosJlrRoutes { }