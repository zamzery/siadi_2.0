import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio.component';
import { InicioRoutes } from './inicio.routing';




@NgModule({
    declarations: [InicioComponent],
    imports: [
        CommonModule,
        InicioRoutes
    ]
})
export class InicioModule { }
