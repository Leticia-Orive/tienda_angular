import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComprasComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
];
