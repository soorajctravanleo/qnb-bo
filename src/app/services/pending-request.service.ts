import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

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

  fetchPendingRequests() {
    const body = {
      "workflowStatus": ["PENDING_ACTION"]
    };
    return this.http.post("/workflows/search", body);
  }
  fetchDetailedRequest(ids) {
    const body = {
      "requestIds": ids
    };
    console.log(body);
    return this.http.post("/usrMngmt/userRequest/details", body);
  }

  getPendingRequestUsers() {
    if (this.pendingRequestUsers.length === 0) {
      return this.fetchPendingRequests().pipe(
        mergeMap(res => {
          const keys = [];
          for (let key in res) {
            keys.push(res[key].requestId);
          }
          return this.fetchDetailedRequest(keys);
        })
      )


    }
    return of(this.pendingRequestUsers);
  }
}
