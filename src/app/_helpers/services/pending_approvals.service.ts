import { Injectable } from '@angular/core';

import {
  MOCKPENDINGROLEAPPROVALS,
  MOCKPENDINGUSERAPPROVALS,
} from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})
export class MockPendingApprovalsService {
  getpendingRoles(): MockResponse {
    return { res: [...MOCKPENDINGROLEAPPROVALS] };
  }

  getpendingUsers(): MockResponse {
    return { res: [...MOCKPENDINGUSERAPPROVALS] };
  }
}
