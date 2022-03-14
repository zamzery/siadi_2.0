import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosIconogramaComponent } from './pagos-iconograma.component';
import { PagosIconogramaRoutes } from './pagos-iconograma.routing';




@NgModule({
    declarations: [PagosIconogramaComponent],
    imports: [
        CommonModule,
        PagosIconogramaRoutes
    ]
})
export class PagosIconogramaModule { }
