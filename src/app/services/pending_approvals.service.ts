import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
  GET_PENDING_ROLE_APPROVALS,
  GET_PENDING_USER_APPROVALS,
} from "../_helpers/apis";
import { Mock_Pending_Role_Approvals,Mock_Pending_User_Approvals } from "../_helpers/models/backend";

@Injectable({
  providedIn: "root",
})
export class QnbPendingApprovalService {
  constructor(private http: HttpClient) {}

  fetchPendingRoles() {
    return this.http.get(GET_PENDING_ROLE_APPROVALS) as Observable<Mock_Pending_Role_Approvals[]>;
  }

  fetchPendingUsers() {
    return this.http.get(GET_PENDING_USER_APPROVALS) as Observable<Mock_Pending_User_Approvals[]>;
  }
}
