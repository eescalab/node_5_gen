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


@NgModule({
  declarations: [
    AppComponent,
    
    BodyComponent,
    MenuComponent,
    CarruselComponent,
    NavegacionComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
