import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecepcionProductosComponent } from './recepcion-productos.component';
import { RecepcionProductosRoutes } from './recepcion-productos.routing';




@NgModule({
    declarations: [RecepcionProductosComponent],
    imports: [
        CommonModule,
        RecepcionProductosRoutes
    ]
})
export class RecepcionProductosModule { }
