import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesClientesComponent } from './reportes-clientes.component';
import { ReportesClientesRoutes } from './reportes-clientes.routing';




@NgModule({
    declarations: [ReportesClientesComponent],
    imports: [
        CommonModule,
        ReportesClientesRoutes
    ]
})
export class ReportesClientesModule { }
