import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto';
import { ProductoService } from '../servicios/producto.servicio';

@Component({
  selector: 'app-edicion-producto',
  templateUrl: './edicion-producto.component.html',
  styleUrls: ['./edicion-producto.component.css'],
})
export class EdicionProductoComponent implements OnInit {
  producto: Producto | undefined;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.producto = this.productoService.obtenerProductoPorId(id);
    }
  }
  obtenerDetallesProducto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.producto = this.productoService.obtenerProductoPorId(id);
    }
  }

  guardarEdicion(): void {
    // Lógica para guardar los cambios en el producto
    if (this.producto) {
      this.productoService.editarProducto(this.producto);
      // Redirigir a la página de detalles del producto actualizado
      this.router.navigate(['/productos', this.producto.id]);
    }
  }

  cancelarEdicion(): void {
    // Redirigir a la página de detalles del producto actual sin cambios
    if (this.producto) {
      this.router.navigate(['/productos', this.producto.id]);
    }
  }
}
