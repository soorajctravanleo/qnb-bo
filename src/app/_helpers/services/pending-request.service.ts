import { Injectable } from '@angular/core';

import {
  MOCK_PENDING_REQEUST_ROLES,
  MOCK_PENDING_REQEUST_USERS,
} from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})

export class MockPendingRequestService {
  getPendingRequestRoles(): MockResponse {
    return { res: [...MOCK_PENDING_REQEUST_ROLES] };
  }

  getPendingRequestUsers(): MockResponse {
    return { res: [...MOCK_PENDING_REQEUST_USERS] };
  }
}
