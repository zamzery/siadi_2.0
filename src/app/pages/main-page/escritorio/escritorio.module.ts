import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscritorioComponent } from './escritorio.component';
import { EscritorioRoutes } from './escritorio.routing';




@NgModule({
    declarations: [EscritorioComponent],
    imports: [
        CommonModule,
        EscritorioRoutes
    ]
})
export class EscritorioModule { }
