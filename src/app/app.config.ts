import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { salesReducer } from './features/launchpad/market/sales/_store/sale.reducer';
import { SalesEffects } from './features/launchpad/market/sales/_store/sale.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      sales: salesReducer,
    }),
    provideEffects([SalesEffects]),
  ],
};
