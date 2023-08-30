import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productos: Producto[] = [
    {
      id: '1',
      nombre: 'Producto 1',
      precio: 10.99,
      categoria: 'Electrónica',
      imagen: '',
      descripcion: '',
      cantidad: 100,
      existencias: 12,
      // Más propiedades del producto...
    },
    // Agrega más productos
  ];

  constructor() {}

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductoPorId(id: string): Producto | undefined {
    return this.productos.find((producto) => producto.id === id);
  }
  obtenerCategorias(): string[] {
    // Obtener todas las categorías únicas de la lista de productos
    const categoriasUnicas = [
      ...new Set(this.productos.map((producto) => producto.categoria)),
    ];
    return categoriasUnicas;
  }
  editarProducto(producto: Producto) {
    const index = this.productos.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
      this.productos[index] = producto;
    }
  }
  borrarProducto(id: string) {
    this.productos = this.productos.filter((producto) => producto.id !== id);
  }
  // Resta la cantidad comprada a las existencias del producto
  actualizarInventario(idProducto: number, cantidadComprada: number): void {
    //const producto = this.productos.find(
    //(producto) => producto.id === idProducto
    //);
    //if (producto) {
    //producto.existencias -= cantidadComprada;
  }
}

// Agrega métodos para editar, eliminar, agregar al carrito, etc.
