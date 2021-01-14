import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {


  constructor(private auth:FirebaseService,private router:Router){}

  canActivate(): boolean{
    if (this.auth.estaAutenticado()) {
      return true
    }else{
      this.router.navigateByUrl('/usuario/login')
      return false
    }
    
  }

  canLoad():boolean{
    if (this.auth.estaAutenticado()) {
      return true
    }else{
      this.router.navigateByUrl('/usuario/login')
      return false
    }
    
  }

}
