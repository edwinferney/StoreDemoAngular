import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number = 0;
  private sub: any;

  item!: IProduct;

  constructor(private productService: ProductService, private route: ActivatedRoute, private storeService: StoreServiceService) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id)
      this.productService.getProductById(this.id).subscribe(p => {
        this.item = p;
        this.item.favorito = this.storeService.estaEnFavorito(this.item);
      });

    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  agregarFavorito(item: IProduct){    
    item = this.storeService.agregarFavorito(item);    
   }
 
   quitarFavorito(item: IProduct){
     item = this.storeService.eliminarFavorito(item);    
   }
 

}
