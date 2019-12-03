import { UserPageComponent } from './user-page.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        component: UserPageComponent,
        pathMatch: 'full'
    }
];
