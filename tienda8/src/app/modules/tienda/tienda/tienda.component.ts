import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaService } from 'src/app/core/services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  public lmProducto:any[];

  constructor(
    private tservice: TiendaService,
    private activatedroute: ActivatedRoute,
  ) { }

  ngOnInit() { 

    this.activatedroute.params.subscribe(data => {// productos/categoria/Polos  -> data
      console.log(data.categoria_nombre);
      this.listarProductos(data.categoria_nombre);
      
    })

  }

  listarProductos(categoria_nombre){

    this.tservice.getProductosXCategoria(categoria_nombre).subscribe( (rpta:any) => {
      console.log(rpta);
      this.lmProducto = rpta.items;
      
    })
  }

  

}
