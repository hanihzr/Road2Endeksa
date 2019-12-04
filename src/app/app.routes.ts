import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'user-page',
    loadChildren: () => import('./features/user-page/user-page.module').then(m => m.UserPageModule)
  }
];
