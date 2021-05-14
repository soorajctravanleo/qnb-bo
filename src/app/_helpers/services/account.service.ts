import { Injectable } from '@angular/core';

import { MOCK_ACCOUNTS } from '../mock';
import { generateError, generateHttpResponse } from '../utils';
import { LoginResponse } from '../types/backend/index';
import { MockAccount } from '../models/backend';

@Injectable({
  providedIn: 'root',
})
export class MockAccountService {

  validateLogin(username: string, password: string) {
    const account = MOCK_ACCOUNTS.find(mockAccount => mockAccount.validateLogin(username, password));

    if (!account) {
      return generateError('general', 'Incorrect username or password!');
    }

    return generateHttpResponse(this.getAccountObject(account));
  }

  validateToken(token: string) {
    const account = MOCK_ACCOUNTS.find(mockAccount => mockAccount.validateToken(token));

    if (!account) {
      return generateError('unauthorized', 'You are not authorized!');
    }

    return generateHttpResponse(this.getAccountObject(account));
  }

  private getAccountObject(account: MockAccount): LoginResponse {
    const { id, username, token, firstName, lastName } = account;
    return { id, username, token, firstName, lastName }
  }
}
