import { Injectable } from '@angular/core';

import { MOCK_ROLES } from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})
export class MockRoleService {

  getRoles(): MockResponse {
    return { res: [...MOCK_ROLES] };
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
