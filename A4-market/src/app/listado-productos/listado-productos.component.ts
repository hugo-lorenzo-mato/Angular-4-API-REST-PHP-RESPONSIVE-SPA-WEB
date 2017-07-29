import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from "../productos.service";
import { Producto } from "../models/producto"

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  public productos: Producto[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductosService
  ) { }

  ngOnInit() {
    this._productoService.getProductos().subscribe(
      resultado => {
        if (resultado.code != 200) {
          console.log(resultado);
        } else {
          this.productos = resultado.data;
        }

      },
      error => {
        console.log(<any>error)
      }
    );
  }

}
