import { Component, OnInit } from "@angular/core";
import { Iusuarios } from "src/app/interface/iusuarios";
import { UsuariosService } from "src/app/services/usuarios.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
	selector: "app-usuarios",
	templateUrl: "./usuarios.component.html",
	styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
	users: Iusuarios[] = [];

	constructor(private usuariosService: UsuariosService) {}

	displayedColumns: string[] = [
		"nombre",
		"telefono",
		"cargo",
		"imagen",
		"statusUsuario",
		"Acciones",
	];
	dataSource!: MatTableDataSource<Iusuarios>;

	ngOnInit() {
		this.getData();
		console.log(this.users);
	}

	getData() {
		this.usuariosService.getData().subscribe((resp: any) => {
			this.users = Object.keys(resp).map(
				(a) =>
					({
						id: a,
						nombre: resp[a].nombre,
						telefono: resp[a].telefono,
						email: resp[a].email,
						cargo: resp[a].cargo,
						username: resp[a].username,
						imagen: resp[a].imagen,
						statusUsuario: resp[a].statusUsuario,
						permisos: resp[a].permisos,
					} as Iusuarios)
			);
			this.dataSource = new MatTableDataSource(this.users);
			console.log("Data-Source: ", this.dataSource);
		});
	}
}
