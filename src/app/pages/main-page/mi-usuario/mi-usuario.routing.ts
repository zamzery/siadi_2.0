import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiUsuarioComponent } from './mi-usuario.component';

const routes: Routes = [
  { path: '',
  component: MiUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiUsuarioRoutes { }