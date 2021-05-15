import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {  
  GET_USERS,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
} from '../_helpers/apis';
import { MockUserData, MockUser } from '../_helpers/models/backend';

@Injectable({
  providedIn: 'root',
})
export class QnbUserService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchUsers() {
    return <Observable<MockUser[]>>(this.http.get(GET_USERS));
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
}
