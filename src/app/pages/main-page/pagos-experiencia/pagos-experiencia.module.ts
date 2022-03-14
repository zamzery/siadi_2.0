import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosExperienciaComponent } from './pagos-experiencia.component';
import { PagosExperienciaRoutes } from './pagos-experiencia.routing';




@NgModule({
    declarations: [PagosExperienciaComponent],
    imports: [
        CommonModule,
        PagosExperienciaRoutes
    ]
})
export class PagosExperienciaModule { }
