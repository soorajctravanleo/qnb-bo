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
  GET_USER_TYPES,
} from '../_helpers/apis';
import {
  MockUserData,
  MockUser,
  MockUserType,
} from '../_helpers/models/backend';

export interface QnbUser {
  userId: string;
  firstName: string;
  lastName?: string;
  dob: string;
  userStatus?: string;
  expiryDate: string;
  comment: string;
  macId: string;
  groups: string[];
}

@Injectable({
  providedIn: 'root',
})
export class QnbUserService {

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get('/usrMngmt/users') as Observable<QnbUser[]>;
  }

  changeStatus( data ) {
    return this.http.post('/usrMngmt/users/enableDisable', data);
  }

  deleteUser(id) {
    return this.http.post('/usrMngmt/users/terminate', id);
  }

  editUser(data) {
    return this.http.post('/usrMngmt/users/modify', data);
  }

  createUser(data: QnbUser) {
    return this.http.post('/usrMngmt/users', data);
  }

  fetchUserTypes() {
    return this.http.get(GET_USER_TYPES) as Observable<MockUserType[]>;
  }

}
