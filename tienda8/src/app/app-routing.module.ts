import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './modules/tienda/body/body.component';

const routes: Routes = [

  { path: '', redirectTo: 'tienda', pathMatch: 'full' },
  {
    path: 'tienda', component: BodyComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
