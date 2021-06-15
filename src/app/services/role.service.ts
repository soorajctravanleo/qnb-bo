import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import { GET_ROLES, GET_ROLE } from '../_helpers/apis';
import { MockRole } from '../_helpers/models/backend';

export interface QnbUserGroup {
  groupCode: string;
  groupDescription: string;
  roles: [];
  groupId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class QnbRoleService {
  private roles: MockRole[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  fetchMockRoles() {
    return (this.http.get(GET_ROLES) as Observable<MockRole[]>);
  }

  fetchRoles() {
    // return (this.http.get(GET_ROLES) as Observable<MockRole[]>);
    //   .pipe(
    //     tap(roles => {
    //       for (const role of roles) {
    //         this.updateRoleList(role);
    //       }
    //     }),
    //   );
    return this.http.get('/auth/appRoles') as Observable<QnbUserGroup[]>;
  }
  fetchGroups() {
    // return (this.http.get(GET_ROLES) as Observable<MockRole[]>)
    //   .pipe(
    //     tap(roles => {
    //       for (const role of roles) {
    //         this.updateRoleList(role);
    //       }
    //     }),
    //   );
    return this.http.get('/auth/userGroups') as Observable<QnbUserGroup[]>;
  }

  deleteRole(role_id: string) {
    return this.http.post('/auth/userGroups/delete/' + role_id, {});
  }

  createRole(role: QnbUserGroup) {
    return this.http.post('/auth/userGroups', role);
  }

  updateRole(role: QnbUserGroup) {
    return this.http.post('/auth/userGroups/modify', role);
  }

  fetchRole(id: number) {
    const params = new HttpParams().append('id', id.toString());
    return (this.http.get(GET_ROLE, { params }) as Observable<MockRole>)
      .pipe(
        tap(role => this.updateRoleList(role)),
      );
  }

  getRoleById(id: number): Observable<MockRole> {
    const role = this.roles.find(rl => rl.id === id);

    if (role) {
      return of(role).pipe(shareReplay());
    }

    return this.fetchRole(id).pipe(shareReplay());
  }

  private updateRoleList(role: MockRole) {
    if (role) {
      const index = this.roles.findIndex(rl => rl.id === role.id);

      if (index === -1) {
        this.roles.push(role);
      } else {
        this.roles[index] = role;
      }
    }
  }
}
