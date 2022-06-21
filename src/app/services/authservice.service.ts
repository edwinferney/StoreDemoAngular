import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }


  login(user: IUser){
    return this.http.post('', user)
  }

  IsLogged(){
    return false;
    //return localStorage.getItem('token')!= null;
  }

}
