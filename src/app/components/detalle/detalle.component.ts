import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number = 0;
  private sub: any;

  item!: IProduct;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.productService.getProductById(this.id).subscribe(p => {
        this.item = p;
      });
    });


  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


 

}
