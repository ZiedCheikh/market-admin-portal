import { Route } from '@angular/router';
import { LaunchpadComponent } from './launchpad.component';
import { AuthGuard } from '../../core/guards/auth.guards';

export const LAUNCHPAD_ROUTES: Route[] = [
  {
    path: '',
    component: LaunchpadComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboards/dashboard-routing.module').then((mod) => mod.DASHBOARDS_ROUTES),
      },
      {
        path: 'market',
        loadChildren: () =>
          import('./market/market-routing.module').then((mod) => mod.MARKET_ROUTES),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
