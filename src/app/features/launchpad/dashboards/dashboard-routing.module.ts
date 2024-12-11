import { Route } from '@angular/router';

export const DASHBOARDS_ROUTES: Route[] = [
  {
    path: 'ecommerce',
    loadComponent: () =>
      import('./ecommerce/ecommerce-dashboard.component').then(
        (mod) => mod.EcommerceDashboardComponent
      ),
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./analytics/analytics-dashboard.component').then(
        (mod) => mod.AnalyticsDashboardComponent
      ),
  },
  {
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full',
  },
];
