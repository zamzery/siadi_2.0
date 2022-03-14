import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiUsuarioComponent } from './mi-usuario.component';
import { MiUsuarioRoutes } from './mi-usuario.routing';




@NgModule({
    declarations: [MiUsuarioComponent],
    imports: [
        CommonModule,
        MiUsuarioRoutes
    ]
})
export class MiUsuarioModule { }
