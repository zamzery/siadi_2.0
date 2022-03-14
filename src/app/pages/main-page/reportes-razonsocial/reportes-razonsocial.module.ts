import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRazonsocialComponent } from './reportes-razonsocial.component';
import { ReportesRazonsocialRoutes } from './reportes-razonsocial.routing';




@NgModule({
    declarations: [ReportesRazonsocialComponent],
    imports: [
        CommonModule,
        ReportesRazonsocialRoutes
    ]
})
export class ReportesRazonsocialModule { }
