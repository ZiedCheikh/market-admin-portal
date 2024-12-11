import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ServerErrorComponent } from './shared/components/server-error/server-error.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./features/landing/landing-routing.module').then((mod) => mod.LANDING_ROUTES),
  },
  {
    path: 'launchpad',
    loadChildren: () =>
      import('./features/launchpad/launchpad-routing.module').then((mod) => mod.LAUNCHPAD_ROUTES),
  },
  {
    path: 'error',
    component: ServerErrorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
