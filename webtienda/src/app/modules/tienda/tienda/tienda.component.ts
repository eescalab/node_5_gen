import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';
import { TiendaService } from 'src/app/core/services/tienda.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  
  public lmProducto: any[];
  public url = environment.apiHost;


  constructor(
    private tService: TiendaService,
    private activatedroute: ActivatedRoute,
    public loginService: LoginService,
  ) {
    console.log('TiendaComponent');
    
   }

  ngOnInit() {

    this.activatedroute.params.subscribe(data => {
      console.log('data.categoria_nombre', data);
      data 
        ? this.listarProductos(data.categoria_nombre)
        : this.listarProductos(data.categoria_nombre);
    })

  }




  listarProductos(categoria_nombre) {

    this.tService.getProductosByCategoria(categoria_nombre).subscribe(rpta => {
      
      this.lmProducto = rpta.items;
    });

    
  }

  addCarrito(productoId) {
    console.log('add carrito', productoId);
    
    this.tService.getAddCarrito(productoId).subscribe();


  }

}
