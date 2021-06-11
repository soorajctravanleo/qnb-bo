import { Injectable } from '@angular/core';
import { MmockRole } from '../models/backend'
import { MOCK_ROLES } from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})
export class MockRoleService {
  roles = [...MOCK_ROLES];
  private lastRoleId = this.roles[this.roles.length - 1].id;

  getRoles(): MockResponse {
    return { res: [...MOCK_ROLES] };
  }

  addRole(data): MockResponse {
    const newRoleId = this.lastRoleId + 1;
    this.roles.push(data);
    return { res: data };
  }

  getRole(id: number): MockResponse {
    const role = MOCK_ROLES.find(mockRole => mockRole.id === id);
    return { res: role };
  }

  searchRole(name: string = ''): MockResponse {
    const roles = MOCK_ROLES.filter(mockRole => mockRole.role.toLowerCase().includes(name.toLowerCase()));
    return { res: roles };
  }
}
