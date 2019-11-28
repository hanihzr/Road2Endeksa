import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [FooterComponent, HomeComponent, NavbarComponent, SnackbarComponent],
  imports: [CommonModule],
  exports: [HomeComponent, SnackbarComponent]
})
export class CoreModule {}
