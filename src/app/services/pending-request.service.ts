import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GET_PENDING_REQUEST_ROLES, GET_PENDING_REQUEST_USERS } from '../_helpers/apis';
import { MockPRRole, MockPRUser } from '../_helpers/models/backend';

@Injectable({
  providedIn: 'root',
})

export class QnbPendingRequestService {
  private pendingRequestRoles: MockPRRole[] = [];
  private pendingRequestUsers: MockPRUser[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  fetchPendingRequestRoles() {
    return (this.http.get(GET_PENDING_REQUEST_ROLES) as Observable<MockPRRole[]>)
    .pipe(
      tap(roles => {
        this.pendingRequestRoles = roles;
      }),
    );
  }

  getPendingRequestRoles() {
    if (this.pendingRequestRoles.length === 0) {
      return this.fetchPendingRequestRoles();
    }
    return of(this.pendingRequestRoles);
  }

  fetchPendingRequestUsers() {
    return (this.http.get(GET_PENDING_REQUEST_USERS) as Observable<MockPRUser[]>)
    .pipe(
      tap(users => {
        this.pendingRequestUsers = users;
      }),
    );
  }

  getPendingRequestUsers() {
    if (this.pendingRequestUsers.length === 0) {
      return this.fetchPendingRequestUsers();
    }
    return of(this.pendingRequestUsers);
  }
}
