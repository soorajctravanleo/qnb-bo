import { Injectable } from '@angular/core';

import { MOCK_BENEFICIARY_AUTHORIZATION } from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})

export class MockBeneficiaryAuthorizationService {
  getBeneficiaryAuthorizations(): MockResponse {
    return { res: [...MOCK_BENEFICIARY_AUTHORIZATION] };
  }
}
