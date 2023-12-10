import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private serviceobj:HttpserviceService, private router:Router){}
  canActivate(): boolean{
    if(this.serviceobj.isAuthenticate()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
