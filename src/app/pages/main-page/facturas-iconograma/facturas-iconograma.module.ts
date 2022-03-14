import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasIconogramaComponent } from './facturas-iconograma.component';
import { FacturasIconogramaRoutes } from './facturas-iconograma.routing';




@NgModule({
    declarations: [FacturasIconogramaComponent],
    imports: [
        CommonModule,
        FacturasIconogramaRoutes
    ]
})
export class FacturasIconogramaModule { }
