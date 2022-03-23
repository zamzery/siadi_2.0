import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { UsuariosComponent } from "./usuarios.component";
import { UsuariosRoutes } from "./usuarios.routing";

@NgModule({
	declarations: [UsuariosComponent],
	imports: [CommonModule, UsuariosRoutes, MatTableModule],
})
export class UsuariosModule {}
