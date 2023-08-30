import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../servicios/producto.servicio';
import { Producto } from '../models/producto';
import { CarritoService } from '../servicios/carrito.servicio';
@Component({
  selector: 'app-productos-por-categoria',
  templateUrl: './productos-por-categoria.component.html',
  styleUrls: ['./productos-por-categoria.component.css'],
})
export class ProductosPorCategoriaComponent implements OnInit {
  categoria: string = '';
  productos: Producto[] = [];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoria = params.get('categoria') || '';
    });
  }
  obtenerProductoPorId(id: string): Producto[] {
    return this.productos.filter((producto) => producto.id === id);
  }
  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
  }
}
