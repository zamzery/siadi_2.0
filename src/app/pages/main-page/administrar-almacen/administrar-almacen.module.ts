import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrarAlmacenComponent } from './administrar-almacen.component';
import { AdministrarAlmacenRoutes } from './administrar-almacen.routing';




@NgModule({
    declarations: [AdministrarAlmacenComponent],
    imports: [
        CommonModule,
        AdministrarAlmacenRoutes
    ]
})
export class AdministrarAlmacenModule { }
