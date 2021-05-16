import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  GET_TIMEZONES,
  GET_LANGUAGES,
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
} from '../_helpers/apis';
import {
  MockLanguage,
  MockTimezone,
  MockCountry,
} from '../_helpers/models/backend';

@Injectable({
  providedIn: 'root',
})
export class QnbListService {

  private languages: MockLanguage[] = [];
  private timezones: MockTimezone[] = [];
  private countries: MockCountry[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  fetchTimezones() {
    return (this.http.get(GET_TIMEZONES) as Observable<MockTimezone[]>)
      .pipe(
        tap(timezones => {
          this.timezones = timezones;
        }),
      );
  }

  getTimezones() {
    if (this.timezones.length === 0) {
      return this.fetchTimezones();
    }

    return of(this.timezones);
  }

  fetchLanguages() {
    return (this.http.get(GET_LANGUAGES) as Observable<MockLanguage[]>)
      .pipe(
        tap(languages => {
          this.languages = languages;
        }),
      );
  }

  getLanguages() {
    if (this.languages.length === 0) {
      return this.fetchLanguages();
    }

    return of(this.languages);
  }

  fetchCountries() {
    return (this.http.get(GET_COUNTRIES) as Observable<MockCountry[]>)
      .pipe(
        tap(countries => {
          this.countries = countries;
        }),
      );
  }

  getCountries() {
    if (this.countries.length === 0) {
      return this.fetchCountries();
    }

    return of(this.countries);
  }

  searchCountry(country: string) {
    const params = new HttpParams().append('search', country);
    return (this.http.get(SEARCH_COUNTRIES, { params }) as Observable<MockCountry[]>);
  }
}
