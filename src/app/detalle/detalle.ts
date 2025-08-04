import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos';


@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle {
  Producto: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private productosService: ProductosService) {
    const id: string = activatedRoute.snapshot.paramMap.get('id') ?? '';
    this.Producto = this.getProducto(id);
  }
  async getProducto(id: string) {
    this.Producto = await this.productosService.getProducto(id)
    .subscribe((data: any) => {
      this.Producto = data;
    })
  }
}
