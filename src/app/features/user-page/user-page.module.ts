import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { UserPageRoutingModule } from './user-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { UserPageDetailComponent } from './user-page-detail/user-page-detail.component';

@NgModule({
  declarations: [UserPageComponent, UserPageDetailComponent],
  imports: [CommonModule, UserPageRoutingModule, SharedModule, RouterModule]
})
export class UserPageModule {}
