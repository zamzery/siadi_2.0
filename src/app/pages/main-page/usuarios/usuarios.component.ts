import { Component, OnInit } from "@angular/core";
import { Iusuarios } from "src/app/interface/iusuarios";
import { UsuariosService } from "src/app/services/usuarios.service";

@Component({
	selector: "app-usuarios",
	templateUrl: "./usuarios.component.html",
	styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
	users: Iusuarios[] = [];

	constructor(private usuariosService: UsuariosService) {}

	ngOnInit() {
		this.getData();
		console.log(this.users);
	}

	getData() {
		this.usuariosService.getData().subscribe((resp) => {
			console.log("resp:", resp);
		});
	}
}
