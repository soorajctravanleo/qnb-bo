import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  GET_TIMEZONES,
  GET_LANGUAGES,
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
} from '../_helpers/apis';

@Injectable({
  providedIn: 'root',
})
export class QnbListService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchTimezones() {
    return this.http.get(GET_TIMEZONES);
  }

  fetchLanguages() {
    return this.http.get(GET_LANGUAGES);
  }

  fetchCountries() {
    return this.http.get(GET_COUNTRIES);
  }

  searchCountry(country: string) {
    const params = new HttpParams().appendAll({
      search: country,
    });

    return this.http.get(SEARCH_COUNTRIES, { params });
  }
}