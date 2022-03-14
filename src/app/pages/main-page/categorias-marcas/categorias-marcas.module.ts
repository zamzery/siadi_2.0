import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasMarcasComponent } from './categorias-marcas.component';
import { CategoriasMarcasRoutes } from './categorias-marcas.routing';




@NgModule({
    declarations: [CategoriasMarcasComponent],
    imports: [
        CommonModule,
        CategoriasMarcasRoutes
    ]
})
export class CategoriasMarcasModule { }
