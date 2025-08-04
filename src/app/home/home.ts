/**import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProductosService } from '../productos';




@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
  imports: [CommonModule], // 👈 Esto es obligatorio para usar *ngFor
})
export class Home {

  

  estado: string = 'Disponibles';

  //comentar
   sumar(a: number, b: number): number {
     let suma = a + b;
     return suma;
   };
   

  misProductos: any = [];
  Json: any;

  constructor(private ProductosService: ProductosService) {
    this.ProductosService.getAll().subscribe((data: any) => {
      this.misProductos = data;
      //console.log('Respuesta completa', data);
    });
  }
  // console.log(this.misProductos); // Moved to constructor below


}*/


import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProductosService } from '../productos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 Para usar *ngFor y otras directivas comunes
})
export class Home implements OnInit {
  misProductos: any = [];
  estado: string = 'Disponibles';

  // Inyección de dependencias con `inject` o en constructor
  private productosService = inject(ProductosService);
  private router = inject(Router);

  ngOnInit() {
    this.cargarProductos();

    // Escuchar navegación para volver a cargar productos si ya estás en la ruta actual
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.cargarProductos();
      });
  }

  cargarProductos() {
    this.productosService.getAll().subscribe((data: any) => {
      this.misProductos = data.results || data; // Ajusta si es necesario
    });
  }
}