import { IUser } from './../models/iuser';
import { SERVER_URL } from './../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private readonly url = SERVER_URL + 'user';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http
      .get(this.url)
      .pipe(map((res: IUser[]) => res));
  }


  getById(id: string) {
    return this.http
      .get(`${this.url}/${id}`)
      .pipe(map((res: IUser) => res));
  }


  register(user: IUser) {
    return this.http.post(this.url, user);
  }

  modifyItem(user: IUser) {
    return this.http
      .post(`${this.url}/profile/${user.id}`, user)
      .pipe(map((res: IUser) => res));
  }

  removeItem(user: IUser) {
    return this.http.delete(`${this.url}/profile/${user.id}`);
  }

}
