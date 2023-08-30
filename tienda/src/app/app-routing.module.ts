import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosPorCategoriaComponent } from './productos-por-categoria/productos-por-categoria.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { EdicionProductoComponent } from './edicion-producto/edicion-producto.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'carrito', component: CarritoComprasComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos/:categoria', component: ProductosPorCategoriaComponent },
  { path: 'productos/:id', component: DetallesProductoComponent },
  { path: 'edicion-producto/:id', component: EdicionProductoComponent },
];
