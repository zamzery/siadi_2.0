import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComisionesComponent } from './comisiones.component';
import { ComisionesRoutes } from './comisiones.routing';




@NgModule({
    declarations: [ComisionesComponent],
    imports: [
        CommonModule,
        ComisionesRoutes
    ]
})
export class ComisionesModule { }
