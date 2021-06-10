import { MockPRRole, MockPRUser } from '../models/backend';

export const MOCK_PENDING_REQEUST_ROLES: MockPRRole[] = [
  new MockPRRole(
    'qb12489914',
    'Test1',
    'This is a test Role',
    'QATAR',
    'MAKER',
    'Enabled',
    'ADD',
    '29/12/2020',
    'UD1001',
    'PENDING',
  ),
  new MockPRRole(
    'qb12489914',
    'Test2',
    'This is a another test',
    'QATAR',
    'MAKER',
    'Enabled',
    'ADD',
    '29/12/2020',
    'UD1001',
    'RETURNED',
  ),
];

export const MOCK_PENDING_REQEUST_USERS: MockPRUser[] = [
  new MockPRUser('qb12489912', '131asp', 'Mahesh', 'Maker', '29/12/2020', 'Enabled', 'ADD', '29/12/2020', 'UD1001', 'PENDING'),
  new MockPRUser('qb12489912', '131asp', 'Francis', 'Maker', '29/12/2020', 'Enabled', 'MODIFY', '29/12/2020', 'UD1001', 'RETURNED'),
];
