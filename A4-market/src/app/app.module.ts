import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';

import { ProductosService } from './productos.service';
import { AnadirProductoComponent } from './anadir-producto/anadir-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component'

const rutasApp: Routes = [
  {path: '' , component: HomeComponent , pathMatch:'full' },
  {path: 'inicio' , component: HomeComponent , pathMatch:'full' },
  {path: 'listado-productos' , component: ListadoProductosComponent },
  {path: 'anadir-producto' , component: AnadirProductoComponent },
  {path: 'producto/:id' , component: DetalleProductoComponent },
  {path: 'editar-producto/:id' , component: EditarProductoComponent },
  {path: '404' , component: Error404Component },
  {path: '**' , redirectTo: '404'}, /* funciona como comodín; ha de ser la última siempre */

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ListadoProductosComponent,
    AnadirProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutasApp),
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
