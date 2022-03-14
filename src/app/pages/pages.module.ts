import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';

import { Error404Component } from './main-page/error404/error404.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    MainPageComponent, Error404Component
  ]
})
export class PagesModule { }
