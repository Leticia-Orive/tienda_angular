import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto';
import { ProductoService } from '../servicios/producto.servicio';
import { CarritoService } from '../servicios/carrito.servicio';
import { SharedDataService } from '../servicios/share-data.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css'],
})
export class DetallesProductoComponent implements OnInit {
  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del producto de los parámetros de ruta
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Obtener el producto por su ID
      const productoEncontrado = this.productoService.obtenerProductoPorId(id);
      if (productoEncontrado !== undefined) {
        this.producto = productoEncontrado;
      }
    }
  }

  obtenerDetallesProducto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.producto = this.productoService.obtenerProductoPorId(id);
    }
  }
  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarAlCarrito(producto);
  }
  borrarProducto(id: string) {
    if (confirm('¿Estás seguro de que deseas borrar este producto?')) {
      this.productoService.borrarProducto(id);
      // Aquí podrías redirigir a la lista de productos o hacer otra acción
    }
  }
}
