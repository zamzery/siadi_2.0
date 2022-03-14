import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisenoProduccionComponent } from './diseno-produccion.component';
import { DisenoProduccionRoutes } from './diseno-produccion.routing';




@NgModule({
    declarations: [DisenoProduccionComponent],
    imports: [
        CommonModule,
        DisenoProduccionRoutes
    ]
})
export class DisenoProduccionModule { }
