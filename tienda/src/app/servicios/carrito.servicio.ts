import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Pedido, ProductoPedido } from '../models/pedido';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private productosEnCarrito: Producto[] = [];
  carritoItems: Producto[] = [];

  agregarAlCarrito(producto: Producto) {
    this.productosEnCarrito.push(producto);
  }

  obtenerProductosEnCarrito(): Producto[] {
    return this.productosEnCarrito;
  }
  eliminarProductoDelCarrito(producto: Producto): void {
    const index = this.productosEnCarrito.indexOf(producto);
    if (index !== -1) {
      this.productosEnCarrito.splice(index, 1);
    }
  }
  disminuirCantidad(producto: Producto): void {
    const productoEnCarrito = this.productosEnCarrito.find(
      (p) => p.id === producto.id
    );
    if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
    }
  }

  aumentarCantidad(producto: Producto): void {
    const productoEnCarrito = this.productosEnCarrito.find(
      (p) => p.id === producto.id
    );
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    }
  }
  generarPedido(idUsuario: number): Pedido | undefined {
    const productosPedido: ProductoPedido[] = this.carritoItems.map((item) => {
      return {
        idProducto: item['producto'].id,
        cantidad: item.cantidad,
      };
    });

    const totalPedido = this.calcularTotal();

    if (productosPedido.length > 0) {
      const pedido: Pedido = {
        idUsuario,
        productos: productosPedido,
        total: totalPedido,
        fecha: new Date(),
      };
      // Lógica para guardar el pedido en la base de datos o en algún sistema
      // ...
      return pedido;
    } else {
      return undefined; // No hay productos en el carrito para generar un pedido
    }
  }
  obtenerCarritoItems(): Producto[] {
    return this.carritoItems;
  }
  calcularTotal(): number {
    let total = 0;
    for (const item of this.carritoItems) {
      total += item.precio;
    }
    return total;
  }
}
