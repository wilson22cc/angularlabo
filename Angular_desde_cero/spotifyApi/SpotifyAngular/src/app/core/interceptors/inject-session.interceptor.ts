import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this.cookieService.get('token')
      let newRequest = request
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}` // aqui le pasamos la autorización, y el token que viene del servicio
          }
        })
      return next.handle(newRequest);

    } catch (error) {
      console.log('Ojito error..', error)
      return next.handle(request);
    }
  }
}



