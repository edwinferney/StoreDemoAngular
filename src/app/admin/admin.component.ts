import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../models/iproduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  lstProducts: IProduct[] = [];

  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(p => this.lstProducts = p);
  }

  edit(item: IProduct){
    this.router.navigate(['/admin/product-edit', item.id]);
  }

  delete(item: IProduct){
    if (confirm('Esta seguro de eliminar el item seleccionado?')){
      this.productService.delete(item.id).subscribe(() => {
        this.getProducts();
        error => console.error(error)
      })  
    }
  }

}
