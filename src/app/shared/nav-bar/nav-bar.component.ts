import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var $: any;

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	changeStatusMenu() {
		$('[data-widget="pushmenu"]').PushMenu("toggle");
	}

	cerrarSesion() {
		localStorage.removeItem("token");
		localStorage.removeItem("refreshToken");
		this.router.navigate(["/login"]);
	}
}
