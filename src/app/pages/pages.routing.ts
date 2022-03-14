import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainPageComponent } from "./main-page/main-page.component";
import { Error404Component } from "./main-page/error404/error404.component";

import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
	{
		path: "login",
		loadChildren: () =>
			import("./login/login.module").then((m) => m.LoginModule),
	},
	{
		path: "",
		component: MainPageComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: "",
				loadChildren: () =>
					import("./main-page/inicio/inicio.module").then(
						(m) => m.InicioModule
					),
			},
			{
				path: "escritorio",
				loadChildren: () =>
					import("./main-page/escritorio/escritorio.module").then(
						(m) => m.EscritorioModule
					),
			},
			{
				path: "cotizaciones",
				loadChildren: () =>
					import("./main-page/cotizaciones/cotizaciones.module").then(
						(m) => m.CotizacionesModule
					),
			},
			{
				path: "pedidos",
				loadChildren: () =>
					import("./main-page/pedidos/pedidos.module").then(
						(m) => m.PedidosModule
					),
			},
			{
				path: "diseno-produccion",
				loadChildren: () =>
					import(
						"./main-page/diseno-produccion/diseno-produccion.module"
					).then((m) => m.DisenoProduccionModule),
			},
			{
				path: "recepcion-productos",
				loadChildren: () =>
					import(
						"./main-page/recepcion-productos/recepcion-productos.module"
					).then((m) => m.RecepcionProductosModule),
			},
			{
				path: "administrar-almacen",
				loadChildren: () =>
					import(
						"./main-page/administrar-almacen/administrar-almacen.module"
					).then((m) => m.AdministrarAlmacenModule),
			},
			{
				path: "envios",
				loadChildren: () =>
					import("./main-page/envios/envios.module").then(
						(m) => m.EnviosModule
					),
			},
			{
				path: "configurar-envios",
				loadChildren: () =>
					import(
						"./main-page/configurar-envios/configurar-envios.module"
					).then((m) => m.ConfigurarEnviosModule),
			},
			{
				path: "facturas-iconograma",
				loadChildren: () =>
					import(
						"./main-page/facturas-iconograma/facturas-iconograma.module"
					).then((m) => m.FacturasIconogramaModule),
			},
			{
				path: "pagos-iconograma",
				loadChildren: () =>
					import(
						"./main-page/pagos-iconograma/pagos-iconograma.module"
					).then((m) => m.PagosIconogramaModule),
			},
			{
				path: "facturas-jlr",
				loadChildren: () =>
					import("./main-page/facturas-jlr/facturas-jlr.module").then(
						(m) => m.FacturasJlrModule
					),
			},
			{
				path: "pagos-jlr",
				loadChildren: () =>
					import("./main-page/pagos-jlr/pagos-jlr.module").then(
						(m) => m.PagosJlrModule
					),
			},
			{
				path: "facturas-experiencia",
				loadChildren: () =>
					import(
						"./main-page/facturas-experiencia/facturas-experiencia.module"
					).then((m) => m.FacturasExperienciaModule),
			},
			{
				path: "pagos-experiencia",
				loadChildren: () =>
					import(
						"./main-page/pagos-experiencia/pagos-experiencia.module"
					).then((m) => m.PagosExperienciaModule),
			},
			{
				path: "comisiones",
				loadChildren: () =>
					import("./main-page/comisiones/comisiones.module").then(
						(m) => m.ComisionesModule
					),
			},
			{
				path: "reportes-razonsocial",
				loadChildren: () =>
					import(
						"./main-page/reportes-razonsocial/reportes-razonsocial.module"
					).then((m) => m.ReportesRazonsocialModule),
			},
			{
				path: "reportes-clientes",
				loadChildren: () =>
					import(
						"./main-page/reportes-clientes/reportes-clientes.module"
					).then((m) => m.ReportesClientesModule),
			},
			{
				path: "reportes-productos",
				loadChildren: () =>
					import(
						"./main-page/reportes-productos/reportes-productos.module"
					).then((m) => m.ReportesProductosModule),
			},
			{
				path: "proveedores",
				loadChildren: () =>
					import("./main-page/proveedores/proveedores.module").then(
						(m) => m.ProveedoresModule
					),
			},
			{
				path: "clientes",
				loadChildren: () =>
					import("./main-page/clientes/clientes.module").then(
						(m) => m.ClientesModule
					),
			},
			{
				path: "productos",
				loadChildren: () =>
					import("./main-page/productos/productos.module").then(
						(m) => m.ProductosModule
					),
			},
			{
				path: "medidas-claves",
				loadChildren: () =>
					import(
						"./main-page/medidas-claves/medidas-claves.module"
					).then((m) => m.MedidasClavesModule),
			},
			{
				path: "categorias-marcas",
				loadChildren: () =>
					import(
						"./main-page/categorias-marcas/categorias-marcas.module"
					).then((m) => m.CategoriasMarcasModule),
			},
			{
				path: "usuarios",
				loadChildren: () =>
					import("./main-page/usuarios/usuarios.module").then(
						(m) => m.UsuariosModule
					),
			},
			{
				path: "mi-usuario",
				loadChildren: () =>
					import("./main-page/mi-usuario/mi-usuario.module").then(
						(m) => m.MiUsuarioModule
					),
			},
			{ path: "**", component: Error404Component },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class PagesRoutes {}
