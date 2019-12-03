import { Router } from '@angular/router';
import { IUser, selectedUser } from 'dist/auth-lib';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ndska-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: IUser = {} as IUser;

  constructor(private store: Store<{ user: IUser }>, router: Router) {
    this.store.select(selectedUser).subscribe(user => {
      if (user) {
        this.user = Object.assign({}, user);
      } else {
        router.navigateByUrl('/');
      }
    });
  }

  ngOnInit() {}
}
