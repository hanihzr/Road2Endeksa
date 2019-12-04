import { Router } from '@angular/router';
import { IUser, UpdateUser, selectedUser, LoadUsers } from 'dist/auth-lib';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'ndska-user-page-detail',
  templateUrl: './user-page-detail.component.html',
  styleUrls: ['./user-page-detail.component.scss']
})
export class UserPageDetailComponent implements OnInit {
  selectedUser: IUser;

  constructor(private store: Store<{ user: IUser }>, private router: Router) {
    this.store.select(selectedUser).subscribe(user => {
      if (user) {
        this.selectedUser = Object.assign({}, user);
      } else {
        this.router.navigateByUrl('/user-page');
      }
    });
  }

  ngOnInit() {}

  // NOTE: Ofcourse it's better to use `Angular Forms`.
  // But I am demonstrating how I created an INPUT COMPONENT in shared Module and now I'm using it without needing for any external library.
  nameChanged(name: string) {
    this.selectedUser.first_name = name;
  }
  lastnameChanged(lastname: string) {
    this.selectedUser.last_name = lastname;
  }
  emailChanged(email: string) {
    this.selectedUser.email = email;
  }
  usernameChanged(username: string) {
    this.selectedUser.username = username;
  }
  avatarChanged(photo: string) {
    this.selectedUser.photo = photo;
  }
  passwordChanged(password: string) {
    this.selectedUser.password = password;
  }

  save() {
    combineLatest(
      of(this.store.dispatch(UpdateUser({ user: this.selectedUser }))),
      this.store.select(selectedUser)
    ).subscribe(([voidResult, userResult]) => {
      if (userResult) {
        this.store.dispatch(LoadUsers());
        this.router.navigateByUrl('/user-page');
      }
    });
  }
}
