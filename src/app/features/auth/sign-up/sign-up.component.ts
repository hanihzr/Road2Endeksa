import { of, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser, AddUser, selectedUser } from 'dist/auth-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'ndska-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  name: string;
  lastname: string;
  username: string;
  password: string;

  constructor(private store: Store<{ user: IUser }>, private router: Router) {}

  ngOnInit() {}

  nameChanged(name: string) {
    this.name = name;
  }
  lastnameChanged(lastname: string) {
    this.lastname = lastname;
  }
  usernameChanged(username: string) {
    this.username = username;
  }
  passwordChanged(password: string) {
    this.password = password;
  }

  signup() {
    const user: IUser = {
      first_name: this.name,
      last_name: this.lastname,
      username: this.username,
      password: this.password
    };

    combineLatest(
      of(this.store.dispatch(AddUser({ user }))),
      this.store.select(selectedUser)
    ).subscribe(([voidResult, userResult]) => {
      if (userResult) {
        this.router.navigateByUrl(`/user-page`);
      }
    });
  }
}
