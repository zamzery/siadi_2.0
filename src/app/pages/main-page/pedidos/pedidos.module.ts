import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosComponent } from './pedidos.component';
import { PedidosRoutes } from './pedidos.routing';




@NgModule({
    declarations: [PedidosComponent],
    imports: [
        CommonModule,
        PedidosRoutes
    ]
})
export class PedidosModule { }
