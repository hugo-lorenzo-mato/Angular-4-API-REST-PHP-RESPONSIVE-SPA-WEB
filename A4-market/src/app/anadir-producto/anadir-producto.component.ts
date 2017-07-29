import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ProductosService } from "../productos.service";
//Nuestro modelo de producto
import { Producto } from "../models/producto"
import { GLOBAL } from "../configuracion-global";

@Component({
  selector: 'app-anadir-producto',
  templateUrl: './anadir-producto.component.html',
  styleUrls: ['./anadir-producto.component.css'],
  providers: [ProductosService]
  //No añado providers porque lo hago en app.module
})
export class AnadirProductoComponent implements OnInit {

  public titulo: string;
  public producto: Producto;
  public filesToUpload;
  public resultUpload;

  constructor(
    private _productoService: ProductosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = "Añadir un nuevo producto:"
    this.producto = new Producto(0, '', '', 0, '');
  }

  ngOnInit() {
  }


  onSubmit() {
    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this._productoService.imageRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) => {
        console.log(result);
        this.resultUpload = result;
        this.producto.imagen = this.resultUpload.filename;
        console.log(this.resultUpload.filename);
        this.guardarProducto();

      }, (error) => {
        console.log(error);
      });
    } else {
      this.guardarProducto();
    }
  }

  guardarProducto() {
    console.log(this.producto);
    this._productoService.addProducto(this.producto).subscribe(
      response => {
        if (response.code == 200) {
          this._router.navigate(['listado-productos']);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  // Método para cuando elijamos un fichero
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }


}
