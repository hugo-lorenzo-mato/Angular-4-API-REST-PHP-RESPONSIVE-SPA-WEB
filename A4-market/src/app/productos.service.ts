import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from './models/producto';
import { GLOBAL } from "./configuracion-global";

@Injectable()
export class ProductosService {

  public url: string;

  constructor(
    /*
    Para poder realizar peticiones ajax dentro de esta clase.
    Tengo que hacer el import del HttpModule en el app.module, sino no funciona
    */
    public _http: Http
  ) {
    this.url = GLOBAL.url;
  }

  getProductos() {
    return this._http.get(this.url + 'productos').map(resultado => resultado.json());
  }

  addProducto(producto: Producto) {
    let json = JSON.stringify(producto);
    let params = 'json=' + json;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(this.url + 'productos', params, { headers: headers }).map(res => res.json());
  }

  imageRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      // Nos deja disponible el objeto para hacer peticiones Ajax
      var xhr = new XMLHttpRequest();

      for (var i = 0; i < files.length; i++) {
        formData.append('uploads[]', files[i], files[i].name);
      }
      //Cuando la petición AJAX esté preparada, tengamos una función anónima
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      /* Abrir la petición AJAX y le decimos el método que vamos a utilizar
       y true para que la lance. La url es a la que hacemos la petición AJAX*/
      xhr.open("POST", url, true);
      /* Enviamos el formulario, la petición AJAX en este caso
      El formData a la URL que le hemos indicado por POST */
      xhr.send(formData);
    });
  }

} //final de clase
