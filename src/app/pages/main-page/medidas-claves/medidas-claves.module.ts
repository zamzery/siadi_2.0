import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedidasClavesComponent } from './medidas-claves.component';
import { MedidasClavesRoutes } from './medidas-claves.routing';




@NgModule({
    declarations: [MedidasClavesComponent],
    imports: [
        CommonModule,
        MedidasClavesRoutes
    ]
})
export class MedidasClavesModule { }
