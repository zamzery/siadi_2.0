import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnviosComponent } from './envios.component';
import { EnviosRoutes } from './envios.routing';




@NgModule({
    declarations: [EnviosComponent],
    imports: [
        CommonModule,
        EnviosRoutes
    ]
})
export class EnviosModule { }
