import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login/login.component';
import { SigninComponent } from './modules/login/signin/signin.component';
import { BodyComponent } from './modules/tienda/body/body.component';
import { CarruselComponent } from './modules/tienda/body/carrusel/carrusel.component';
import { MenuComponent } from './modules/tienda/body/menu/menu.component';
import { NavegacionComponent } from './modules/tienda/body/navegacion/navegacion.component';
import { TiendaComponent } from './modules/tienda/tienda/tienda.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarroComponent } from './modules/tienda/carro/carro.component';
import { OrdenComponent } from './modules/tienda/orden/orden.component';
import { DetalleComponent } from './modules/tienda/orden/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    MenuComponent,
    NavegacionComponent,
    CarruselComponent,
    TiendaComponent,
    LoginComponent,
    SigninComponent,
    CarroComponent,
    OrdenComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,


    HttpClientModule,


    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
