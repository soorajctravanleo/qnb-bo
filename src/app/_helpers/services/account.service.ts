import { Injectable } from '@angular/core';

import { MOCK_ACCOUNTS } from '../mock';
// import { generateError, generateHttpResponse } from '../utils';
import { LoginResponse, MockResponse } from '../types/backend';
import { MockAccount } from '../models/backend';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockAccountService {

  validateLogin(username: string, password: string): MockResponse {
    const account = MOCK_ACCOUNTS.find(mockAccount => mockAccount.validateLogin(username, password));

    if (!account) {
      // return generateError('general', 'Incorrect username or password!');
      return {
        errorType: 'general',
        errorMessage: 'Incorrect username or password!',
      };
    }

    // return generateHttpResponse(this.getAccountObject(account));
    return {
      res: this.getAccountObject(account),
    };
  }

  validateToken(token: string): MockResponse {
    const account = MOCK_ACCOUNTS.find(mockAccount => mockAccount.validateToken(token));

    if (!account) {
      // return generateError('unauthorized', 'You are not authorized!');
      return {
        errorType: 'unauthorized',
        errorMessage: 'You are not authorized!',
      };
    }

    // return generateHttpResponse(this.getAccountObject(account));
    return {
      res: this.getAccountObject(account),
    };
  }

  private getAccountObject(account: MockAccount): LoginResponse {
    const { token } = account;
    return { 
      jti: 'dummyjti',
      access_token: token,  
      refresh_token: 'dummytoken',
      expires_in: 30000,
      token_type: 'bearer',
      scope: 'read write trust',
    };
  }
}
