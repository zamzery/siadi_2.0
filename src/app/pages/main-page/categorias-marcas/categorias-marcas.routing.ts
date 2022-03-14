import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasMarcasComponent } from './categorias-marcas.component';

const routes: Routes = [
  { path: '',
  component: CategoriasMarcasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasMarcasRoutes { }