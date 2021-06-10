import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GET_BENEFICIARY_AUTHORIZATION } from '../_helpers/apis';
import { MockBeneficiaryAuthorization } from '../_helpers/models/backend';

@Injectable({
  providedIn: 'root',
})

export class QnbBeneficiaryAuthorizationService {
  private beneficiaryAuths: MockBeneficiaryAuthorization[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  fetchBeneficiaryAuths() {
    return (this.http.get(GET_BENEFICIARY_AUTHORIZATION) as Observable<MockBeneficiaryAuthorization[]>)
    .pipe(
      tap(beneficiaryAuths => {
        this.beneficiaryAuths = beneficiaryAuths;
      }),
    );
  }

  getBeneficiaryAuths() {
    if(this.beneficiaryAuths.length === 0) {
      return this.fetchBeneficiaryAuths();
    }
    return of(this.beneficiaryAuths);
  }
}
