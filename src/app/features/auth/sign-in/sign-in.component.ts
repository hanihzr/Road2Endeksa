import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser, SelectUserById, selectedUser } from 'dist/auth-lib';
import { Router } from '@angular/router';
import { of, combineLatest } from 'rxjs';

@Component({
  selector: 'ndska-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userName: string = '';
  password: string = '';

  constructor(private store: Store<{ user: IUser }>, private router: Router) {}

  ngOnInit() {}

  // NOTE: I know that this is not a good idea, and it's better to use Angular Forms.
  // But I am demonstrating how I created an INPUT COMPONENT in shared Module and now I'm using it without needing for any external library.
  userNameChanged(userName: string) {
    this.userName = userName;
  }

  passwordChanged(password: string) {
    this.password = password;
  }

  login() {
    // Since there is NO SERVER for Authentication, I am using a random response from my mockApi.
    // And All you have to do is to press Login Button
    const user = {
      id: (Math.round(Math.random() * 10) + 1).toString(),
      username: this.userName,
      password: this.password
    };

    combineLatest(
      of(this.store.dispatch(SelectUserById({ id: user.id }))),
      this.store.select(selectedUser)
    ).subscribe(([voidResult, userResult]) => {
      if (userResult) {
        this.router.navigateByUrl(`/user-page`);
      }
    });
  }
}
