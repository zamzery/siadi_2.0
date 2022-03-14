import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router) {}
	canActivate(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			if (localStorage.getItem("token") != null) {
				//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
				resolve(true);
			} else {
				this.router.navigateByUrl("/login");
				resolve(false);
			}
		});
	}
}
