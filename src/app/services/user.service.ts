import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
} from '../_helpers/apis';
import { MockUserData, MockUser } from '../_helpers/models/backend';

@Injectable({
  providedIn: 'root',
})
export class QnbUserService {

  private users: MockUser[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  fetchUsers() {
    return (this.http.get(GET_USERS) as Observable<MockUser[]>)
      .pipe(
        tap(users => {
          for (const user of users) {
            this.updateUserList(user);
          }
        }),
      );
  }

  fetchUser(id: number) {
    const params = new HttpParams().append('id', id.toString());
    return (this.http.get(GET_USER, { params }) as Observable<MockUser>)
      .pipe(
        tap(user => this.updateUserList(user)),
      );
  }

  createUser(data: MockUserData) {
    return this.http.post(CREATE_USER, data);
  }

  editUser(id: number, data: MockUserData) {
    return this.http.post(EDIT_USER, { id, data });
  }

  deleteUser(id: number) {
    return this.http.post(DELETE_USER, { id });
  }

  private updateUserList(user: MockUser) {
    if (user) {
      const index = this.users.findIndex(usr => usr.id === user.id);

      if (index === -1) {
        this.users.push(user);
      } else {
        this.users[index] = user;
      }
    }
  }
}
