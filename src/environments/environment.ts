// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	urlFirebase: "https://siadi-b4957-default-rtdb.firebaseio.com/",
	urlLogin:
		"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_7cNvIDqVd0cD9G_76HMU2ITgRgB6T54",
	urlGetUser:
		"https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB_7cNvIDqVd0cD9G_76HMU2ITgRgB6T54",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
