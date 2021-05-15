import { Injectable } from '@angular/core';

import {
  MOCK_LANGUAGES,
  MOCK_TIMEZONES,
  MOCK_COUNTRIES,
} from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})
export class MockListService {

  getLanguages(): MockResponse {
    return { res: [...MOCK_LANGUAGES] };
  }

  getTimezones(): MockResponse {
    return { res: [...MOCK_TIMEZONES] };
  }

  getCountries(): MockResponse {
    return { res: [...MOCK_COUNTRIES] };
  }

  searchCountry(name: string = ''): MockResponse {
    const countries = MOCK_COUNTRIES.filter(mockCountry => mockCountry.name.toLowerCase().includes(name.toLowerCase()));
    return { res: countries };
  }
}
