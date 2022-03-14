import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasExperienciaComponent } from './facturas-experiencia.component';
import { FacturasExperienciaRoutes } from './facturas-experiencia.routing';




@NgModule({
    declarations: [FacturasExperienciaComponent],
    imports: [
        CommonModule,
        FacturasExperienciaRoutes
    ]
})
export class FacturasExperienciaModule { }
