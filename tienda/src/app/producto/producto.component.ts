import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  categorias: string[] = ['Electrónica', 'Ropa', 'Hogar', 'Deportes'];
}
