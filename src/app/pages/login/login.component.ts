import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { functions } from "src/app/helpers/functions";
import { Ilogin } from "src/app/interface/ilogin";
import { LoginService } from "src/app/services/login.service";
import { alerts } from "src/app/helpers/alertas";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	public loginForm = this.form.group({
		email: ["", [Validators.required]],
		password: ["", Validators.required],
	});

	formSubmit = false;
	constructor(
		private form: FormBuilder,
		private loginService: LoginService,
		private router: Router
	) {}

	ngOnInit(): void {}

	login() {
		this.formSubmit = true;
		if (this.loginForm.invalid) {
			return;
		}

		const data: Ilogin = {
			email: this.loginForm.controls["email"].value + "@iconograma.com",
			password: this.loginForm.controls["password"].value,
			returnSecureToken: true,
		};
		this.loginService.login(data).subscribe(
			(resp) => {
				this.router.navigateByUrl("/");
			},
			(err) => {
				if (err.error.error.message == "EMAIL_NOT_FOUND") {
					alerts.basicAlert("Error", "El usuario no existe", "error");
				}
				if (err.error.error.message == "INVALID_PASSWORD") {
					alerts.basicAlert(
						"Error",
						"La contraseña es incorrecta",
						"error"
					);
				} else {
					alerts.basicAlert("Error", "Ha ocurrido un error", "error");
				}
			}
		);
	}

	invalidField(field: string) {
		return functions.invalidField(field, this.loginForm, this.formSubmit);
	}
}
