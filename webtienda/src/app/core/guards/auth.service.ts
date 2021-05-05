import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    console.log('AuthService - canActivate ');
    return this.loginService.estaAutenticado().pipe(
      tap(estaAutenticado => {
        if (!estaAutenticado) {
          this.router.navigateByUrl('/login');
        }
      })
    )



  }

}
