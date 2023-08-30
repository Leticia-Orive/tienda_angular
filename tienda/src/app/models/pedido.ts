// pedido.ts
export interface Pedido {
  idUsuario: number;
  productos: ProductoPedido[];
  total: number;
  fecha: Date;
}

export interface ProductoPedido {
  idProducto: number;
  cantidad: number;
}
