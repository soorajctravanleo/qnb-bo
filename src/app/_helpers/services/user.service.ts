import { Injectable } from '@angular/core';

import { MOCK_USERS } from '../mock/users';
import { generateError, generateHttpResponse } from '../utils';
import { LoginResponse } from '../types/backend/index';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QnbUserService {

  validateLogin(username: string, password: string): Observable<HttpResponse<LoginResponse>> {
    const user = MOCK_USERS.find(mockUser => mockUser.validateLogin(username, password));

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
}
