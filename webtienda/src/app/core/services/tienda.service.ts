import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Transaccion } from '../models/model_transaction';
import { expand, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

private host = environment.apiHost;
private url = this.host + '/api/v1';

public lcart: any;

constructor(
  private http: HttpClient
) { }


 
  ///////////////// Categorias ////////////////////////

  public getCategorias(): Observable<Transaccion> {
    return this.http
      .get<Transaccion>(this.url + "/categoria/");
  }

  ///////////////// Productos ////////////////////////

  public getProductos(): Observable<Transaccion> {
    return this.http
      .get<Transaccion>(this.url + "/producto/");
  }

  
  
  public getProductosByCategoria(categoria_nombre) {
    console.log('getProductosByCategoria',categoria_nombre);
    
    return this.http
      .get(this.url + "/producto/categoria/" + categoria_nombre).pipe(
        tap((rpta: Transaccion) => {
          console.log('rpta:', rpta);

         
        })
      );
  }

  getUsuario() {
    return JSON.parse(localStorage.getItem('usuario')) || {};
  }

  ///////////////  Carro //////////////////////////////

  public getAddCarrito(productId): Observable<Transaccion> {

    let obj = {
      productId,
      usuarioId: this.getUsuario()._id
    }
    
    
    return this.http
      .post<Transaccion>(this.url + "/carro/", obj)
        .pipe(
          tap(rpta => {
            console.log('rpta:',rpta);
            
            this.lcart = rpta;
            
            
          })
        );
  }

  public listarCarro(userId) {
    
    
    return this.http.get(this.url +"/carro/"+userId)
      .pipe(
        tap(rpta => {
          this.lcart = rpta;
        })
      );

  }

  ////////////////// ORDEN

  public listarOrden(userId) {
    

    return this.http.get(this.url + "/orden/listar/" + userId);

  }

  public generarOrden(userId) {
    

    return this.http.get(this.url + "/orden/generar/" + userId);

  }


}
