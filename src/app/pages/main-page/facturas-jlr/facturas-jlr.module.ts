import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasJlrComponent } from './facturas-jlr.component';
import { FacturasJlrRoutes } from './facturas-jlr.routing';




@NgModule({
    declarations: [FacturasJlrComponent],
    imports: [
        CommonModule,
        FacturasJlrRoutes
    ]
})
export class FacturasJlrModule { }
