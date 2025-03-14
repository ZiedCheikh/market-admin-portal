import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { salesReducer } from './features/launchpad/market/sales/_store/sale.reducer';
import { SalesEffects } from './features/launchpad/market/sales/_store/sale.effects';
import { HttpErrorInterceptor } from './core/interceptor/http.error.interceptor';
import { importProvidersFrom } from '@angular/core';
import { RetryInterceptor } from './core/interceptor/http.retry.interceptor';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([HttpErrorInterceptor, RetryInterceptor])),
    provideStore({
      sales: salesReducer,
    }),
    provideEffects([SalesEffects]),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    TranslateService,
  ],
};
