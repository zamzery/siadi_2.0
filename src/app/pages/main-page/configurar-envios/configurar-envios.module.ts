import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurarEnviosComponent } from './configurar-envios.component';
import { ConfigurarEnviosRoutes } from './configurar-envios.routing';




@NgModule({
    declarations: [ConfigurarEnviosComponent],
    imports: [
        CommonModule,
        ConfigurarEnviosRoutes
    ]
})
export class ConfigurarEnviosModule { }
