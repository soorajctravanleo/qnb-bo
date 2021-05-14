import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as API from '../_helpers/apis';

@Injectable({
  providedIn: 'root',
})
export class QnbListService {

  constructor(
    private http: HttpClient,
  ) {}

  fetchTimezones() {
    return this.http.get(API.GET_TIMEZONES);
  }

  fetchLanguages() {
    return this.http.get(API.GET_LANGUAGES);
  }

  fetchCountries() {
    return this.http.get(API.GET_COUNTRIES);
  }

  searchCountry(country: string) {
    const params = new HttpParams().appendAll({
      search: country,
    });

    return this.http.get(API.SEARCH_COUNTRIES, { params });
  }
}