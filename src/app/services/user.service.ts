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
  // name: string;
  firstName: string;
  lastName?: string;
  dob: string;
  // mobileNumber: string;
  // userType: string;
  userStatus?: string;
  // bankSubType: string;
  // corporateId: string;
  // entity: string;
  expiryDate: string;
  comment: string;
  // timeZoneId: string;
  // language: string;
  // emailId: string;
  // sendPwdOnEmail: true;
  // userBranchCode: string;
  // authTypePrimary: string;
  // authTypeSecondary: string;
  // optAuthTypePrimary: string;
  // optAuthTypeSecondary: string;
  // authTypeAttribute: string;
  macId: string;
  // authApplyDayTimeBasedLogin: true;
  groups: string[];
}

@Injectable({
  providedIn: 'root',
})
export class QnbUserService {

  // private users: MockUser[] = [];

  constructor(private http: HttpClient) { }

  fetchUsers() {
    // return (this.http.get(GET_USERS) as Observable<MockUser[]>)
    //   .pipe(
    //     tap(users => {
    //       for (const user of users) {
    //         this.updateUserList(user);
    //       }
    //     }),
    //   );
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

  // fetchUser(id: number) {
  //   const params = new HttpParams().append('id', id.toString());
  //   return (this.http.get(GET_USER, { params }) as Observable<MockUser>)
  //     .pipe(
  //       tap(user => this.updateUserList(user)),
  //     );
  // }

  createUser(data: QnbUser) {
    // return this.http.post(CREATE_USER, data);
    return this.http.post('/usrMngmt/users', data);
  }

  // editUser(id: number, data: MockUserData) {
  //   return this.http.post(EDIT_USER, { id, data });
  // }

  // deleteUser(id: number) {
  //   return this.http.post(DELETE_USER, { id });
  // }

  fetchUserTypes() {
    return this.http.get(GET_USER_TYPES) as Observable<MockUserType[]>;
  }

  // private updateUserList(user: MockUser) {
  //   if (user) {
  //     const index = this.users.findIndex(usr => usr.id === user.id);

  //     if (index === -1) {
  //       this.users.push(user);
  //     } else {
  //       this.users[index] = user;
  //     }
  //   }
  // }
}
