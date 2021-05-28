import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GET_UNITS } from '../_helpers/apis';
import { MockUnit } from '../_helpers/models/backend';


// export interface QnbUnit {
//   code: string;
//   name: string;
// }

@Injectable({
  providedIn: 'root'
})

export class QnbUnitService {
  private units: MockUnit[] = [];

  constructor(
    private http: HttpClient
  ){ }

  fetchUnits(){
    return (this.http.get(GET_UNITS) as Observable<MockUnit[]>)
    .pipe(
      tap(units =>{
        this.units = units;
      }),
    );
  }

  getUnits(){
    if(this.units.length === 0){
      return this.fetchUnits();
    }
    return of(this.units);
  }
}