import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/core/services/login.service';
import { TiendaService } from 'src/app/core/services/tienda.service';
import { CarroComponent } from '../../carro/carro.component';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  nameUser:string;
  constructor(
    public loginService: LoginService,
    public tservice: TiendaService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.nameUser = this.loginService.getUsuario().nombre
  }

  open() {

    return this.loginService.estaAutenticado().subscribe(autenticado => {

      if (autenticado) {
        const modalRef = this.modalService.open(CarroComponent);
        modalRef.componentInstance.usuarioId = this.loginService.getUsuario()._id;

      }else{
        this.router.navigateByUrl('/login');
      }
    })

    
  }

  logout() {
    this.loginService.logout().then(_ => {
      () => this.router.navigateByUrl('/');
    })
  }


}
