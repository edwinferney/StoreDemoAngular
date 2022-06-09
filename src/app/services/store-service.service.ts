import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { IProduct } from '../models/iproduct';


@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  private miLista: IProduct[] = [];
  private misFavoritos = new BehaviorSubject<IProduct[]>([]);
  misFavoritos$ = this.misFavoritos.asObservable();

  constructor() { }

  agregarFavorito(product: IProduct){
    console.log('aqui')
    console.log(product)
    this.miLista.push(product);
    this.misFavoritos.next(this.miLista);
    this.saveData(this.miLista);
    console.log(this.miLista)
  }

  saveData(value:IProduct[]){    
    localStorage.removeItem("milista");
    localStorage.setItem("milista",JSON.stringify(value));
  }

  getData() {
    let lista = JSON.parse(localStorage.getItem("milista")!);
    this.miLista = lista;
    this.misFavoritos.next(this.miLista);
   }


}
