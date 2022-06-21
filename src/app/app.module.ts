import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleComponent,
    FavoritosComponent,
    TarjetaComponent,
    MainPageComponent,
    SortPipe,
    SearchPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
