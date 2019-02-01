import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'perfil', 
    loadChildren: './perfil/perfil.module#PerfilPageModule' 
  },
  { 
    path: 'subir', 
    loadChildren: './subir/subir.module#SubirPageModule' 
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'detalles', loadChildren: './detalles/detalles.module#DetallesPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
