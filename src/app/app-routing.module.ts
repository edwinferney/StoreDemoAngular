import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'detalle/:id', component: DetalleComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
