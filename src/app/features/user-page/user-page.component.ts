import { Router } from '@angular/router';
import { IUser, SelectUser, LoadUsers, selectAllUsers, RemoveUser } from 'dist/auth-lib';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ndska-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  users: IUser[];

  constructor(private store: Store<{ user: IUser }>, private router: Router) {
    store.dispatch(LoadUsers());
    window.scroll(0, 0);
  }

  ngOnInit() {
    this.store.select(selectAllUsers).subscribe(users => {
      if (users) {
        this.users = users;
      }
    });
  }

  edit(user: IUser) {
    this.store.dispatch(SelectUser({ user }));
    this.router.navigateByUrl(`user-page/users/${user.id}`);
  }

  delete(user: IUser) {
    this.store.dispatch(RemoveUser({ user }));
  }
}
