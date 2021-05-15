import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GET_ENTITIES } from '../_helpers/apis';
import { MockEntity } from '../_helpers/models/backend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QnbEntityService {

  constructor(private http: HttpClient) { }

  fetchEntities() {
    return this.http.get(GET_ENTITIES) as Observable<MockEntity[]>;
  }
}
