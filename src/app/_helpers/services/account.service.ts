import { Injectable } from '@angular/core';

import { MOCK_ACCOUNTS } from '../mock/accounts';
import { generateError, generateHttpResponse } from '../utils';
import { LoginResponse } from '../types/backend/index';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QnbAccountService {

  validateLogin(username: string, password: string): Observable<HttpResponse<LoginResponse>> {
    const user = MOCK_ACCOUNTS.find(mockAccount => mockAccount.validateLogin(username, password));

    if (!user) {
      return generateError('general', 'Incorrect username or password!');
    }

    return generateHttpResponse({
      id: user.getId(),
      username: user.getUsername(),
      token: user.getToken(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
    });
  }

  validateToken(token: string): Observable<HttpResponse<LoginResponse>> {
    const user = MOCK_ACCOUNTS.find(mockUser => mockUser.validateToken(token));

    if (!user) {
      return generateError('unauthorized', 'You are not authorized!');
    }

    return generateHttpResponse({
      id: user.getId(),
      username: user.getUsername(),
      token: user.getToken(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
    });
  }
}
