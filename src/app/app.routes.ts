import { Routes, RouterModule } from '@angular/router';
import { Home } from '../app/home/home';
import { Registro } from '../app/registro/registro';
import { Login } from '../app/login/login';
import { Detalle } from '../app/detalle/detalle';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'registro', component: Registro },
  { path: 'login', component: Login },
  { path: 'detalle/:id', component: Detalle },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

