import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

import { filter, takeUntil } from 'rxjs/operators';
import { LoginService } from 'src/app/core/services/login.service';
import { TiendaService } from 'src/app/core/services/tienda.service';
import { DetalleComponent } from './detalle/detalle.component';


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html'
})
export class OrdenComponent implements OnInit {

  public destroyed = new Subject<any>()
  public lorden:any[];

  constructor(
    
    private loginService:LoginService,
    private tService: TiendaService,
    private modalService: NgbModal,
  ) {
    console.log('OrdenComponent');
    
   }

  ngOnInit() {
    this.listarOrdenes();
  }

  listarOrdenes() {
    let usuarioId = this.loginService.getUsuario()._id;

    this.tService.listarOrden(usuarioId).subscribe((rpta:any) => {
      console.log('listarOrden',rpta);
      this.lorden = rpta;
      
    })
  }

  pop(item){
    
    const modalRef = this.modalService.open(DetalleComponent);
    modalRef.componentInstance.orden = item
    
  }


}
