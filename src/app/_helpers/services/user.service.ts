import { Injectable } from '@angular/core';

import { MockUser, MockUserData } from '../models/backend';
import { MOCK_USERS } from '../mock';
import { generateHttpResponse, generateError } from '../utils';

@Injectable()
export class MockUserService {
  users = [...MOCK_USERS];
  private lastUserId = this.users[this.users.length - 1].id;

  getUsers() {
    return generateHttpResponse(this.users);
  }

  createUser(data: MockUserData) {
    const newUserId = this.lastUserId + 1;
    this.lastUserId = newUserId;
    const newUser = new MockUser(newUserId, data);
    this.users.push(newUser);
    return generateHttpResponse(newUser);
  }

  editUser(id: number, data: MockUserData) {
    const index = this.getUserIndex(id);
    if (index === -1) {
      return generateError('notFound', 'User not found!');
    }

    this.users[index] = new MockUser(id, data);
    return generateHttpResponse(data);
  }

  deleteUser(id: number) {
    const index = this.getUserIndex(id);
    if (index === -1) {
      return generateError('notFound', 'User not found!');
    }

    return generateHttpResponse();
  }

  private getUserIndex(id: number) {
    return this.users.findIndex(user => user.id === id);
  }
}