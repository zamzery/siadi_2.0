import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosJlrComponent } from './pagos-jlr.component';
import { PagosJlrRoutes } from './pagos-jlr.routing';




@NgModule({
    declarations: [PagosJlrComponent],
    imports: [
        CommonModule,
        PagosJlrRoutes
    ]
})
export class PagosJlrModule { }
