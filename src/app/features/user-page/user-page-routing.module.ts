import { routes } from './user-page.routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UserPageRoutingModule {}
