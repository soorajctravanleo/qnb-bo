import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, tap, map } from 'rxjs/operators';

import {
  GET_PENDING_REQUEST_ROLES,
  GET_PENDING_MAKER_WORKFLOWS,
  GET_PENDING_USER_APPROVALS,
} from '../_helpers/apis';
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
      'workflowStatus': ['PENDING_ACTION'],
    };
    return this.http.post(GET_PENDING_MAKER_WORKFLOWS, body);
  }
  fetchDetailedRequest(ids) {
    const body = {
      'requestIds': ids,
    };
    return this.http.post(GET_PENDING_USER_APPROVALS, body);
  }

  getPendingRequestUsers() {
    if (this.pendingRequestUsers.length === 0) {
      return this.fetchPendingRequests().pipe(
        mergeMap(res => {
          const keys = [];
          for (let key in res) {
            keys.push(res[key].requestId);
          }
          return this.fetchDetailedRequest(keys).pipe(
            map((res: any) => {
              for (let response of res) {
                if (response.groups.length > 1) {
                  response.groups = response.groups.map((r) => {
                    return r.groupCode;
                  });
                } else {
                  response.groups = response.groups[0].groupCode;
                }
              }
              return res;
            })
          );
        }),
      );
    }
    return of(this.pendingRequestUsers);
  }
}
