import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutes } from './usuarios.routing';




@NgModule({
    declarations: [UsuariosComponent],
    imports: [
        CommonModule,
        UsuariosRoutes
    ]
})
export class UsuariosModule { }
