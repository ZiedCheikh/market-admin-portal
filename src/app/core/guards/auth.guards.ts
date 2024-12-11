import { CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.authService.userInfo().pipe(
      take(1),

      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/landing']);
      }),

      catchError(() => {
        this.router.navigate(['/error']);
        return of(false);
      })
    );
  }
}
