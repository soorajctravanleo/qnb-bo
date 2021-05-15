import { MockRole, RoleStatus } from '../models/backend';

export const MOCK_ROLES: MockRole[] = [
  new MockRole(
    1,
    {
      roleName: 'system',
      description: 'system has access to all menus and features',
      multiLogin: true,
      noPasswordExpiry: true,
      nokLogin: true,
      decentLogin: true,
      makerId: 1,
    },
    RoleStatus.ACTIVE,
    1620782520,
  ),

  new MockRole(
    2,
    {
      roleName: 'admin',
      description: 'admin has limited access to all features',
      multiLogin: true,
      noPasswordExpiry: true,
      nokLogin: true,
      decentLogin: true,
      makerId: 1,
    },
    RoleStatus.ACTIVE,
    1620882520,
  ),

  new MockRole(
    3,
    {
      roleName: 'viewer',
      description: 'viewer has access only readonly access',
      multiLogin: true,
      noPasswordExpiry: true,
      nokLogin: true,
      decentLogin: true,
      makerId: 1,
    },
    RoleStatus.ACTIVE,
    1620984520,
  ),
];
