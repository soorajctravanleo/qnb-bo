import { Injectable } from "@angular/core";

import {
  MOCK_PENDING_ROLE_APPROVALS,
  MOCK_PENDING_USER_APPROVALS,
} from "../mock";
import { MockResponse } from "../types/backend";

@Injectable({
  providedIn: "root",
})
export class MockPendingApprovalsService {
  getpendingRoles(): MockResponse {
    return { res: [...MOCK_PENDING_ROLE_APPROVALS] };
  }

  getpendingUsers(): MockResponse {
    return { res: [...MOCK_PENDING_USER_APPROVALS] };
  }
}
