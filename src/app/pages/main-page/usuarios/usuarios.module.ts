import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { UsuariosComponent } from "./usuarios.component";
import { UsuariosRoutes } from "./usuarios.routing";
import { MatCardModule } from "@angular/material/card";

@NgModule({
	declarations: [UsuariosComponent],
	imports: [CommonModule, UsuariosRoutes, MatTableModule, MatCardModule],
})
export class UsuariosModule {}
