import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresComponent } from './proveedores.component';
import { ProveedoresRoutes } from './proveedores.routing';




@NgModule({
    declarations: [ProveedoresComponent],
    imports: [
        CommonModule,
        ProveedoresRoutes
    ]
})
export class ProveedoresModule { }
