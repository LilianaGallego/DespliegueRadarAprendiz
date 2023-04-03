import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserGuard implements CanActivate {
  
  role: any = localStorage.getItem('role')

  constructor(private router:Router){}

  canActivate():any  {
    if(this.role == 'ROLE_ADMIN' ||
    this.role == 'ROLE_APPRENTICE' ||
    this.role == 'ROLE_OPERATION'){
      return true;
    }
    this.router.navigate([''])
    return false;
  }
}
