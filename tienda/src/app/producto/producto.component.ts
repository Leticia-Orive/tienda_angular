import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto';
import { ProductoService } from '../servicios/producto.servicio';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto: Producto | null = null;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productoId = params.get('id');
      if (productoId) {
        //this.producto = this.productoService.obtenerProductoPorId(productoId);
      } else {
        this.producto = null; // Si no hay ID válido, establecemos producto a null
      }
    });
  }

  categorias: string[] = ['Electrónica', 'Ropa', 'Hogar', 'Deportes'];
}
