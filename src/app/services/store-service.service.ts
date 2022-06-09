import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';


@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  private miLista: IProduct[] = [];

  constructor() { }

  agregarFavorito(product: IProduct): IProduct{
    this.miLista = JSON.parse(localStorage.getItem("milista")!) || [];
    product.favorito = true;
    if (this.miLista != null){
      if (!(this.miLista!.find(item => item.id === product.id))) {
        this.miLista.push(product);
        localStorage.removeItem("milista");
        localStorage.setItem("milista",JSON.stringify(this.miLista));
      }
    }
    return product;
  }

  
  eliminarFavorito(product: IProduct):IProduct{   
    this.miLista = JSON.parse(localStorage.getItem("milista")!) || [];
    product.favorito = false;
    if (this.miLista != null){
      let index = this.miLista.findIndex(item => item.id === product.id);
      if(index != -1) {      
        console.log(index)
        this.miLista.splice(index, 1);
        localStorage.removeItem("milista");
        localStorage.setItem("milista",JSON.stringify(this.miLista));
      }
    }
    return product;
  }

  estaEnFavorito(product: IProduct):boolean{

    let encontrado = false;   
    this.miLista = JSON.parse(localStorage.getItem("milista")!) || [];

    if (this.miLista != null && product != undefined){
      let index = this.miLista.findIndex(item => item.id === product.id);
      if(index != -1) {  
        encontrado = true;    
      }
    }
    return encontrado;
  }

  getFavoritos(): IProduct[] {
    this.miLista = JSON.parse(localStorage.getItem("milista")!) || [];
    return this.miLista;
   }


}
