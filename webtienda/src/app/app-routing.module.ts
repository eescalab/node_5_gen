import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { SigninComponent } from './modules/login/signin/signin.component';
import { BodyComponent } from './modules/tienda/body/body.component';
import { OrdenComponent } from './modules/tienda/orden/orden.component';
import { TiendaComponent } from './modules/tienda/tienda/tienda.component';
import { AuthService } from './core/guards/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'app/tienda', pathMatch: 'full' },
  {
    path: 'app',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
      {
        path: 'tienda', component: BodyComponent,
        children: [

          {
            path: ':categoria_nombre', component: TiendaComponent
          },
          {
            path: '', component: TiendaComponent
          },
        ],
      },
      {
        path: 'privado', component: BodyComponent,
        canActivate: [AuthService],
        children: [


          {
            path: 'listarOrden', component: OrdenComponent
          }
        ],

      },
    ]
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
