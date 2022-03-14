import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesProductosComponent } from './reportes-productos.component';
import { ReportesProductosRoutes } from './reportes-productos.routing';




@NgModule({
    declarations: [ReportesProductosComponent],
    imports: [
        CommonModule,
        ReportesProductosRoutes
    ]
})
export class ReportesProductosModule { }
