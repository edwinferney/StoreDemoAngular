import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit, OnChanges {

  @Input()
  item!: IProduct

  @Input()
  showButtonDetail: boolean = true;

  @Output()
  itemEmmitter: EventEmitter<IProduct> = new EventEmitter<IProduct>();


  constructor(private route: Router, private storeService: StoreServiceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.item.favorito! = this.storeService.estaEnFavorito(this.item);
    if (this.showButtonDetail===false){
      console.log(this.item)
    }
  }

  ngOnInit(): void {


  }




  agregarFavorito(item: IProduct){    
   item = this.storeService.agregarFavorito(item);    
  }

  quitarFavorito(item: IProduct){
    item = this.storeService.eliminarFavorito(item);    
  }

  irAdetalle(item: IProduct){
    this.route.navigate(['/detalle',item.id]);
  }


}
