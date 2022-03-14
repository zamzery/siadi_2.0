import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurarEnviosComponent } from './configurar-envios.component';

const routes: Routes = [
  { path: '',
  component: ConfigurarEnviosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurarEnviosRoutes { }