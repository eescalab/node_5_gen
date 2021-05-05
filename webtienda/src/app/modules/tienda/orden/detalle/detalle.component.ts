import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  @Input() orden:any;
  constructor() { }

  ngOnInit() {
  }

}
