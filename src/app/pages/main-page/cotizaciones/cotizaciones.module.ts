import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizacionesComponent } from './cotizaciones.component';
import { CotizacionesRoutes } from './cotizaciones.routing';




@NgModule({
    declarations: [CotizacionesComponent],
    imports: [
        CommonModule,
        CotizacionesRoutes
    ]
})
export class CotizacionesModule { }
