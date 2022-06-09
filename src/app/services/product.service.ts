import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._apiUrl);
  }

  delete(id: number){
    return this.http.delete(`${this._apiUrl}/${id}`);
  }

  crear(user: IProduct): Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body=JSON.stringify(user);
    return this.http.post(this._apiUrl,body,{'headers': headers});
  }

  getProductById(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${this._apiUrl}/${id}`);
  }

  modify(user: IProduct): Observable<any>{
    console.log(user)
    const headers = {'content-type': 'application/json'}
    const body=JSON.stringify(user);
    return this.http.put(`${this._apiUrl}/${user.id}`,body,{'headers': headers});
  }

}
