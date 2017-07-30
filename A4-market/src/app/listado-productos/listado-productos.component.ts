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
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductosService
  ) {
    this.confirmado = null;
   }

  ngOnInit() {
    this.getProductos();
  }



  getProductos() {
    this._productoService.getProductos().subscribe(
      result => {

        if (result.code != 200) {
          console.log(result);
        } else {
          this.productos = result.data;
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }

  borrarConfirm(id) {
    this.confirmado = id;
  }

  cancelarConfirm() {
    this.confirmado = null;
  }

  onDeleteProducto(id) {
    this._productoService.deleteProducto(id).subscribe(
      response => {
        if (response.code == 200) {
          this.getProductos();
        } else {
          alert('Error al borrar producto: inténtelo más tarde.');
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
