import { Route } from '@angular/router';

export const MARKET_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'sale-add',
    pathMatch: 'full',
  },
  {
    path: 'sale-add',
    loadComponent: () =>
      import('./sales/sale-add/sale-add.component').then((mod) => mod.SaleAddComponent),
  },
  {
    path: 'sale-update',
    loadComponent: () =>
      import('./sales/sale-update/sale-update.component').then((mod) => mod.SaleUpdateComponent),
  },
];
