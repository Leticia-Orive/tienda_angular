import { Component } from '@angular/core';
import { SharedDataService } from '../servicios/share-data.service';
import { Producto } from '../models/producto';
import { ProductoService } from '../servicios/producto.servicio';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  producto: Producto | undefined; // Declara la variable producto aquí

  constructor(
    private productoService: ProductoService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    // Obtén el producto usando el servicio
    this.producto =
      this.productoService.obtenerProductoPorId('ID_DEL_PRODUCTO');
    this.sharedDataService.producto$.subscribe((producto) => {
      // Aquí puedes utilizar el producto compartido
    });
  }
}
