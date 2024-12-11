import { Route } from '@angular/router';

export const LANDING_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./opening/opening.component').then((mod) => mod.OpeningComponent),
  },
];
