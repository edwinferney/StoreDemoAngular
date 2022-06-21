import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  s: string="";
  public lstProducts: IProduct[] = [];

  SortbyParam = '';
  SortDirection = 'asc';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(p => {
      this.lstProducts = p;
    });
  }

  
  setFilter(filter: string){
    this.s = filter;
  }

  onSortDirection(){
    if (this.SortDirection === 'desc'){
      this.SortDirection = 'asc';
    }else{
      this.SortDirection = 'desc';
    }
  }


}
