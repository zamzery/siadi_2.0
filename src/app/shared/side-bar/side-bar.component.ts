import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
	selector: "app-side-bar",
	templateUrl: "./side-bar.component.html",
	styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		$('[data-widget="treeview"]').Treeview("init");
	}
}
