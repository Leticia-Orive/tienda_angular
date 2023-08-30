import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  // Simula la actualización del inventario en la base de datos o sistema externo
  actualizarInventario(idProducto: number, cantidadComprada: number): boolean {
    // Lógica para actualizar el inventario en la base de datos o sistema externo
    // ...

    // Devolver true si la actualización fue exitosa, o false si no se pudo actualizar
    return true;
  }
}
