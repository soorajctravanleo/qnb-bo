import { Injectable } from '@angular/core';

import { generateHttpResponse } from '../utils';
import { MOCK_ENTITIES } from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})
export class MockEntityService {

  getEntities(): MockResponse {
    return {
      res: [...MOCK_ENTITIES],
    };
  }
}
