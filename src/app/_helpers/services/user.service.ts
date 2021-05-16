import { Injectable } from '@angular/core';

import { MockUser, MockUserData } from '../models/backend';
import { MOCK_USERS, MOCK_USER_TYPES } from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})
export class MockUserService {
  users = [...MOCK_USERS];
  private lastUserId = this.users[this.users.length - 1].id;

  getUsers(): MockResponse {
    return { res: this.users };
  }

  getUserById(id: number): MockResponse {
    const userWithId = this.users.find(user => user.id === id);
    return { res: userWithId };
  }

  createUser(data: MockUserData): MockResponse {
    const newUserId = this.lastUserId + 1;
    this.lastUserId = newUserId;
    const newUser = new MockUser(newUserId, data);
    this.users.push(newUser);
    return { res: newUser };
  }

  editUser(id: number, data: MockUserData): MockResponse {
    const index = this.getUserIndex(id);
    if (index === -1) {
      return {
        errorType: 'notFound',
        errorMessage: 'User not found!',
      };
    }

    this.users[index] = new MockUser(id, data);
    return { res: data };
  }

  deleteUser(id: number): MockResponse {
    const index = this.getUserIndex(id);
    if (index === -1) {
      return {
        errorType: 'notFound',
        errorMessage: 'User not found!',
      };
    }

    return { res: null };
  }

  getUserTypes(): MockResponse {
    return { res: [...MOCK_USER_TYPES] };
  }

  private getUserIndex(id: number) {
    return this.users.findIndex(user => user.id === id);
  }
}
