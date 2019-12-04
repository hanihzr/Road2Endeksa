import { UserPageDetailComponent } from './user-page-detail/user-page-detail.component';
import { UserPageComponent } from './user-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'users/:id',
    component: UserPageDetailComponent,
    pathMatch: 'full'
  }
];
