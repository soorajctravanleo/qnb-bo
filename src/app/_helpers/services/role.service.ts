import { Injectable } from '@angular/core';
import { MockRole } from '../models/backend'
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
    this.lastRoleId = newRoleId;
    const newRole = new MockRole(newRoleId, data, 1,new Date().getTime());
    this.roles.push(newRole);
    return { res: newRole };
  }

  getRole(id: number): MockResponse {
    const role = MOCK_ROLES.find(mockRole => mockRole.id === id);
    return { res: role };
  }

  searchRole(name: string = ''): MockResponse {
    const roles = MOCK_ROLES.filter(mockRole => mockRole.data.roleName.toLowerCase().includes(name.toLowerCase()));
    return { res: roles };
  }
}
