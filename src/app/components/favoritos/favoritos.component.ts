import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { StoreServiceService } from 'src/app/services/store-service.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public lstProducts: IProduct[] = [];

  constructor(private storeServie:StoreServiceService) { }

  ngOnInit(): void {

    this.lstProducts = this.storeServie.getFavoritos();
    
  }

}
