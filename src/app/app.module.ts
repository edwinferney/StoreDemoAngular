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

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleComponent,
    FavoritosComponent,
    TarjetaComponent
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
