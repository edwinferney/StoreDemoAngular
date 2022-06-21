import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthserviceService, private route: Router){

  }
  canActivate(){
    if(this.authService.IsLogged())
    {
      return true
      ;
    }else{
      this.route.navigate(['login']);
      return false;
    }
  }

}
