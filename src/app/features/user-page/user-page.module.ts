import { UserPageRoutingModule } from './user-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';

@NgModule({
  declarations: [UserPageComponent],
  imports: [CommonModule, UserPageRoutingModule]
})
export class UserPageModule {}
