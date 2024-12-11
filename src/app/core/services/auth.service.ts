import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  username: string;
  details: string;
  roles: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  userInfo() {
    return this.http.get<AuthResponseData>('http://myhost:8082/me').pipe(
      catchError((error) => {
        console.error('lofs');
        return throwError(() => this.handleError(error)); // Retourne un Observable en cas d'erreur
      })
    );
  }

  private handleError(errorRes: HttpErrorResponse) {
    const errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return new Error(errorMessage);
    }
    return new Error(errorMessage);
  }
}
