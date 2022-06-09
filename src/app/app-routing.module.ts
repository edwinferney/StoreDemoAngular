import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: '', component: ProductosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'favoritos', component: FavoritosComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
