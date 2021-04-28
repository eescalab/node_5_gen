import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/model_transaction';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {


private host = 'http://localhost:8080';
private url = this.host+'/api/v1';

constructor(
  private http: HttpClient
) { }


  /////////////////////// Categorias /////////////

  public getCategorias() {
    return this.http.get<Transaccion>(this.url+'/categoria');
  }


}
