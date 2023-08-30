import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { CarritoService } from '../servicios/carrito.servicio';
import { Pedido } from '../models/pedido';
import { ProductoService } from '../servicios/producto.servicio';
import { InventarioService } from '../servicios/inventario.sercivicio';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'],
})
export class CarritoComprasComponent implements OnInit {
  productosEnCarrito: Producto[] = [];
  carritoItems: Producto[] = [];
  detallePedido: any;
  constructor(
    private carritoService: CarritoService,
    private productoService: ProductoService,
    private inventarioService: InventarioService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.productosEnCarrito = this.carritoService.obtenerProductosEnCarrito();
    // En el método ngOnInit u otro lugar apropiado

    this.carritoItems = this.carritoService.obtenerCarritoItems();
  }
  eliminarProducto(producto: Producto): void {
    this.carritoService.eliminarProductoDelCarrito(producto);
    this.productosEnCarrito = this.carritoService.obtenerProductosEnCarrito();
  }

  modificarCantidad(producto: Producto) {
    // Implementar lógica para modificar la cantidad del producto en el carrito
  }
  agregarProductoAlCarrito(producto: Producto): void {
    const productoEnCarrito = { ...producto, cantidad: 1 }; // Inicializa la cantidad
    // Resto de la lógica para agregar al carrito
  }
  disminuirCantidad(producto: Producto): void {
    this.carritoService.disminuirCantidad(producto);
  }
  aumentarCantidad(producto: Producto): void {
    this.carritoService.aumentarCantidad(producto);
  }
  confirmarCompra(): void {
    // Mostrar un modal de confirmación con los detalles del carrito y el total
    const confirmar = confirm('¿Desea confirmar la compra?');
    if (confirmar) {
      // Lógica para completar la compra
      // Generar un pedido, actualizar inventario, limpiar carrito, etc.
      const idUsuario = 123; // Reemplaza con el ID del usuario actual
      const pedido: Pedido | undefined =
        this.carritoService.generarPedido(idUsuario);

      if (pedido) {
        pedido.productos.forEach((productoPedido) => {
          this.productoService.actualizarInventario(
            productoPedido.idProducto,
            productoPedido.cantidad
          );
        });

        alert('¡Compra realizada con éxito!');
        // Limpiar el carrito u otras acciones necesarias
      } else {
        alert('No hay productos en el carrito para generar un pedido');
      }

      // Mostrar un mensaje de éxito
      alert('¡Compra realizada con éxito!');
    }
    // Envía el pedido al backend
    this.enviarPedidoAlBackend(this.detallePedido).subscribe(
      (respuesta) => {
        // El pedido se ha enviado y procesado correctamente
        console.log('Pedido enviado al backend', respuesta);
        // Aquí puedes realizar acciones adicionales, como redirigir al usuario o mostrar mensajes de éxito
      },
      (error) => {
        // Ha ocurrido un error al enviar el pedido al backend
        console.error('Error al enviar el pedido', error);
        // Aquí puedes manejar el error y mostrar mensajes al usuario
      }
    );
  }
  guardarPedido(pedido: any) {
    const url = 'URL_DEL_ENDPOINT'; // Reemplaza con la URL real del endpoint en tu backend
    return this.http.post(url, pedido);
  }
  enviarPedidoAlBackend(pedido: any) {
    const url = 'URL_DEL_ENDPOINT_DEL_BACKEND'; // Reemplaza con la URL correcta
    return this.http.post(url, pedido);
  }
}
