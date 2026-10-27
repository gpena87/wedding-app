import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
    loadComponent: () => import('./pages/welcome/welcome-page.component'),
	},
	{
		path: 'invitacion',
    loadComponent: () => import('./pages/home/home-page.component'),
	},
  {
    path: '**',
    redirectTo: '',
  }
];
