import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private http: HttpClient) {}
	canActivate(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			if (localStorage.getItem("token") != null) {
				let body = {
					idToken: localStorage.getItem("token"),
				};
				this.http.post(environment.urlGetUser, body).subscribe(
					(res) => {
						resolve(true);
					},
					(err) => {
						localStorage.removeItem("token");
						localStorage.removeItem("refreshToken");
						this.router.navigate(["/login"]);
						resolve(false);
					}
				);
			} else {
				this.router.navigateByUrl("/login");
				resolve(false);
			}
		});
	}
}
