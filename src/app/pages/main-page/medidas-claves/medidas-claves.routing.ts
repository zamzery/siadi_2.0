import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MedidasClavesComponent } from './medidas-claves.component';

const routes: Routes = [
  { path: '',
  component: MedidasClavesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedidasClavesRoutes { }