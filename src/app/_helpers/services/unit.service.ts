import { Injectable } from '@angular/core';
import { MOCK_UNITS } from '../mock';

import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})

export class MockUnitService {
  getUnits(): MockResponse {
    return { res: [...MOCK_UNITS] };
  }
}
