import { routes } from './auth.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule {}
