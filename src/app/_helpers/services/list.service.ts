import { Injectable } from '@angular/core';

import {
  MOCK_LANGUAGES,
  MOCK_TIMEZONES,
  MOCK_COUNTRIES,
} from '../mock';
import { generateHttpResponse } from '../utils';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})
export class MockListService {

  getLanguages(): MockResponse {
    // return generateHttpResponse([...MOCK_LANGUAGES]);
    return { res: [...MOCK_LANGUAGES] };
  }

  getTimezones(): MockResponse {
    // return generateHttpResponse([...MOCK_TIMEZONES]);
    return { res: [...MOCK_TIMEZONES] };
  }

  getCountries(): MockResponse {
    // return generateHttpResponse([...MOCK_COUNTRIES]);
    return { res: [...MOCK_COUNTRIES] };
  }

  searchCountry(name: string = ''): MockResponse {
    console.log(name);
    const countries = MOCK_COUNTRIES.filter(mockCountry => mockCountry.name.toLowerCase().includes(name.toLowerCase()));
    // return generateHttpResponse(countries);
    return { res: countries };
  }
}
