import { MockEntity } from '../models/backend';

export const MOCK_ENTITIES: MockEntity[] = [
  new MockEntity(1, 'ARMIMPLBRANCH', ['Bank', 'ARMIMPLBRANCH']),
  new MockEntity(2, 'Bank', ['Bank']),
  new MockEntity(3, 'HPINBRANCH', ['Bank', 'HPINBRANCH']),
  new MockEntity(4, 'QNBDEV', ['Bank', 'QNBDEV']),
];
