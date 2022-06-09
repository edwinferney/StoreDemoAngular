import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input()
  item!: IProduct

  @Input()
  showButtonDetail: boolean = true;

  @Output()
  itemEmmitter: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(private route:Router,private storeService: StoreServiceService) { }

  ngOnInit(): void {

    if (this.item != undefined){
      this.item.favorito = this.storeService.estaEnFavorito(this.item);
    }
   
  }


  agregarFavorito(item: IProduct){    
   item = this.storeService.agregarFavorito(item);    
  }

  quitarFavorito(item: IProduct){
    item = this.storeService.eliminarFavorito(item);    
  }

  irAdetalle(item: IProduct){
    console.log(item.id)
    this.route.navigate(['/detalle',item.id]);
  }

}
