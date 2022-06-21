import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  item!: IProduct;

  id: number = -1;
  private sub: any;

  formProduct: FormGroup;

  urlImagen: string;


  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, fb: FormBuilder) { }

  ngOnInit(): void {



    this.formProduct = new FormGroup({
      id: new FormControl(0),
      title: new FormControl('', { validators: [Validators.required] }),
      price: new FormControl(0.0, { validators: [Validators.required]}),
      description: new FormControl(''),
      category: new FormControl('', { validators: [Validators.required]}),
      image: new FormControl(''),
      rating: new FormGroup({
        rate: new FormControl(0, { validators: [Validators.required] }),
        count: new FormControl(0)
      })
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.productService.getProductById(this.id).subscribe(p => {
        this.item = p;
        this.urlImagen = this.item.image;
        this.formProduct.patchValue(this.item);
      });
    });    

  }



  onSubmit(){
    if (this.formProduct.valid){
      if (confirm('Esta seguro de guardar los datos modificacos?')){
        this.productService.modify(this.formProduct.value).subscribe(resp => {
          this.router.navigate(['admin']);
        });  
      }
    }
  }

  
  cancelar(){
    this.router.navigate(['admin']); 
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
