import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.chekcookieSession(); // toodo: solo verifica que el token exista
  }

  chekcookieSession(): boolean {
    try {
      const token: boolean = this.cookieService.check('token')
      if (!token) {
        this.router.navigate(['/', 'auth'])

      }
      return token
    } catch (error) {
      console.log('Algo sucedio ??', error)
      return false
    }

  }
}

