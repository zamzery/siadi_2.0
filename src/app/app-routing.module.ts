import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutes } from './pages/pages.routing';

import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '',
  component: MainPageComponent,
  children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutes],
  exports: [RouterModule]
})
export class AppRoutingModule { }
