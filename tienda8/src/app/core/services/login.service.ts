import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private host = 'http://localhost:8080';
private url = this.host + '/api/v1';

constructor(
  private http: HttpClient
) { }

  

  guardarToken(token:string){
    localStorage.setItem('token', token);
    let hoy = new Date();
    hoy.setSeconds(90000);
    localStorage.setItem('expira', hoy.getTime().toString())
  }

  public login(email:String, password:String){

    let data = {
      email,
      password
    }

    return this.http.post(`${this.url}/login`, data)
      .pipe(
        tap( (resp:any) => {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        })
      )
    
    
  }

}
