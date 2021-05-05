import { Component, OnInit } from '@angular/core';
import { ModelCategoria } from 'src/app/core/models/model_categoria';
import { Transaccion } from 'src/app/core/models/model_transaction';
import { TiendaService } from 'src/app/core/services/tienda.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public lcategorias: ModelCategoria[];

  constructor(
    private tService: TiendaService,
  ) { }

  ngOnInit() {

    this.tService.getCategorias().subscribe((item: Transaccion) => {


     
        this.lcategorias = item.items;
      
    });

  }

}
