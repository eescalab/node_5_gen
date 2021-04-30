import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './modules/tienda/body/body.component';
import { CarruselComponent } from './modules/tienda/body/carrusel/carrusel.component';
import { MenuComponent } from './modules/tienda/body/menu/menu.component';
import { NavegacionComponent } from './modules/tienda/body/navegacion/navegacion.component';
import { TiendaComponent } from './modules/tienda/tienda/tienda.component';


import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
    BodyComponent,
    MenuComponent,
    CarruselComponent,
    NavegacionComponent,
    TiendaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //-->Formularios
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
