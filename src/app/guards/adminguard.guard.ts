import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {

  isadmin: any = localStorage.getItem('role')

  constructor(private router:Router){}

  canActivate():any  {

    if(this.isadmin == 'ROLE_ADMIN'){
      return true;
    }
    this.router.navigate([''])
    return false;
  }
  
}
