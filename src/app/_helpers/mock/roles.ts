import { MockRole, RoleStatus } from '../models/backend';

export const MOCK_ROLES: MockRole[] = [
  new MockRole(
    1,
    'system',
    'system has access to all menus and features',
    RoleStatus.ACTIVE,
    true,
    true,
    1,
    1620782520,
  ),

  new MockRole(
    2,
    'admin',
    'admin has limited access to all features',
    RoleStatus.ACTIVE,
    true,
    true,
    1,
    1620882520,
  ),

  new MockRole(
    2,
    'viewer',
    'viewer has access only readonly access',
    RoleStatus.INACTIVE,
    true,
    true,
    1,
    1620984520,
  ),
];
