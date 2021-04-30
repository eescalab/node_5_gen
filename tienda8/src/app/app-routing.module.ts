import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { BodyComponent } from './modules/tienda/body/body.component';
import { TiendaComponent } from './modules/tienda/tienda/tienda.component';

const routes: Routes = [

  { path: '', redirectTo: 'tienda', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'tienda', component: BodyComponent,
    children: [
      {
        path: '', component: TiendaComponent
      },
      {
        path: ':categoria_nombre', component: TiendaComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
