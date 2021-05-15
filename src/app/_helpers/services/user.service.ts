import { Injectable } from '@angular/core';

import { MockUser, MockUserData } from '../models/backend';
import { MOCK_USERS } from '../mock';
import { generateHttpResponse, generateError } from '../utils';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})
export class MockUserService {
  users = [...MOCK_USERS];
  private lastUserId = this.users[this.users.length - 1].id;

  getUsers(): MockResponse {
    // return generateHttpResponse(this.users);
    return { res: this.users };
  }

  createUser(data: MockUserData): MockResponse {
    const newUserId = this.lastUserId + 1;
    this.lastUserId = newUserId;
    const newUser = new MockUser(newUserId, data);
    this.users.push(newUser);
    // return generateHttpResponse(newUser);
    return { res: newUser };
  }

  editUser(id: number, data: MockUserData): MockResponse {
    const index = this.getUserIndex(id);
    if (index === -1) {
      // return generateError('notFound', 'User not found!');
      return {
        errorType: 'notFound',
        errorMessage: 'User not found!',
      };
    }

    this.users[index] = new MockUser(id, data);
    // return generateHttpResponse(data);
    return { res: data };
  }

  deleteUser(id: number): MockResponse {
    const index = this.getUserIndex(id);
    if (index === -1) {
      // return generateError('notFound', 'User not found!');
      return {
        errorType: 'notFound',
        errorMessage: 'User not found!',
      };
    }

    // return generateHttpResponse();
    return { res: null };
  }

  private getUserIndex(id: number) {
    return this.users.findIndex(user => user.id === id);
  }
}