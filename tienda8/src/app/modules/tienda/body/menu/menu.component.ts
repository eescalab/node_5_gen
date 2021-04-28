import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/core/models/model_transaction';
import { TiendaService } from 'src/app/core/services/tienda.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public lcategorias: any[];

  constructor(
    private tService: TiendaService
  ) { 



  }

  ngOnInit() {

    this.tService.getCategorias().toPromise().then(
      (rpta: Transaccion) => {
        console.log(rpta);
        this.lcategorias = rpta.items;
        
      }
    )

  }

}
