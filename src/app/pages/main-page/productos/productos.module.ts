import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosComponent } from './productos.component';
import { ProductosRoutes } from './productos.routing';




@NgModule({
    declarations: [ProductosComponent],
    imports: [
        CommonModule,
        ProductosRoutes
    ]
})
export class ProductosModule { }
