import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: SignUpComponent,
    pathMatch: 'full'
  }
];
