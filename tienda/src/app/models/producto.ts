export interface Producto {
  [x: string]: any;
  id: string;
  nombre: string;
  imagen: string;
  precio: number;
  categoria: string;
  descripcion: string;
  cantidad: number;
  existencias: number;
}
