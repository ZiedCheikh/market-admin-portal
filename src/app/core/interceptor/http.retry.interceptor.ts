import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { tap, retry, timer } from 'rxjs';

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

export const RetryInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry({
      count: MAX_RETRIES,
      delay: (error, retryCount) => {
        if (error instanceof HttpErrorResponse && error.status === 404) {
          throw error;
        }
        return timer(RETRY_DELAY * retryCount);
      },
    }),
    tap({
      error: (error) => {
        //notificationService.showError(`Erreur après ${MAX_RETRIES} tentatives.`);
        console.error(error);
      },
    })
  );
};
