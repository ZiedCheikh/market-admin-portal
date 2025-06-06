import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const HttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        router.navigate(['/landing']);
      } else if (error.status === 403) {
        router.navigate(['/forbidden']);
      } else if (error.status === 500) {
        router.navigate(['/sever/error']);
      }
      return throwError(() => error);
    })
  );
};
