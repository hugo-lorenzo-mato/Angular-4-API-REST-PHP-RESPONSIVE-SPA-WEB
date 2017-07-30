import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ProductosService } from "../productos.service";
//Nuestro modelo de producto
import { Producto } from "../models/producto"
import { GLOBAL } from "../configuracion-global";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
  providers: [ProductosService]
})
export class DetalleProductoComponent implements OnInit {

  public producto: Producto;

  constructor(
    private _productoService: ProductosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getProducto();
  }

  getProducto() {
    //Recuperamos los parámetros de la URL
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._productoService.getProducto(id).subscribe(
        response => {
          if (response.code == 200) {
            this.producto = response.data;
            console.log(this.producto.imagen);

          } else {
            this._router.navigate(['/listado-productos']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }

}
