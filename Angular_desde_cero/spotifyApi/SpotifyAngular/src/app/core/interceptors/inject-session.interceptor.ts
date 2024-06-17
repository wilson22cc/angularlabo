import { HttpInterceptorFn } from '@angular/common/http';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
