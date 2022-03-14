import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesComponent } from './clientes.component';
import { ClientesRoutes } from './clientes.routing';




@NgModule({
    declarations: [ClientesComponent],
    imports: [
        CommonModule,
        ClientesRoutes
    ]
})
export class ClientesModule { }
