import { Component, OnInit } from "@angular/core";
import { Iusuarios } from "src/app/interface/iusuarios";

@Component({
	selector: "app-usuarios",
	templateUrl: "./usuarios.component.html",
	styleUrls: ["./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
	users: Iusuarios[] = [];

	constructor() {}

	ngOnInit() {
		console.log(this.users);
	}
}
