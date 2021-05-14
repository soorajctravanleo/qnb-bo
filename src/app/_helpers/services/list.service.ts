import { Injectable } from '@angular/core';

import {
  MOCK_LANGUAGES,
  MOCK_TIMEZONES,
  MOCK_COUNTRIES,
} from '../mock';
import { generateHttpResponse } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class MockListService {

  getLanguages() {
    return generateHttpResponse([...MOCK_LANGUAGES]);
  }

  getTimezones() {
    return generateHttpResponse([...MOCK_TIMEZONES]);
  }

  getCountries() {
    return generateHttpResponse([...MOCK_COUNTRIES]);
  }

  searchCountry(name: string = '') {
    console.log(name);
    const countries = MOCK_COUNTRIES.filter(mockCountry => mockCountry.name.toLowerCase().includes(name.toLowerCase()));
    return generateHttpResponse(countries);
  }
}
