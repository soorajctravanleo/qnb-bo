import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {
  GET_PENDING_ROLE_APPROVALS,
  GET_PENDING_USER_APPROVALS,
  GET_PENDING_WORKFLOWS,
  POST_APPROVE_USER,
} from '../_helpers/apis';
import {
  MockPendingRoleApprovals,
  MockPendingUserApprovals,
  MockPRRole,
  MockPRUser,
} from '../_helpers/models/backend';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QnbPendingApprovalService {
  private pendingRequestRoles: MockPRRole[] = [];
  private pendingRequestUsers: MockPRUser[] = [];
  constructor(private http: HttpClient) {}

  fetchPendingRoles() {
    return this.http.get(GET_PENDING_ROLE_APPROVALS) as Observable<
      MockPendingRoleApprovals[]
    >;
  }

  fetchPendingUsers(data) {
    return this.http.post(GET_PENDING_USER_APPROVALS, data);
  }

  approveUser(data) {
    return this.http.post(POST_APPROVE_USER, data);
  }

  getPendingWorkflows() {
    return this.http.get(GET_PENDING_WORKFLOWS);
  }

  getPendingRequestUsers() {
    if (this.pendingRequestUsers.length === 0) {
      return this.getPendingWorkflows().pipe(
        mergeMap((res) => {
          const keys = [];
          for (let key in res) {
            keys.push(res[key].requestId);
          }
          const data = { requestIds: keys };
          return this.fetchPendingUsers(data).pipe(
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
        })
      );
    }
    return of(this.pendingRequestUsers);
  }
}
