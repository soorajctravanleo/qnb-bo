import {
  MockUser,
  MockUserType,
  MockUserTypeId,
} from '../models/backend';

export const MOCK_USER_TYPES: MockUserType[] = [
  new MockUserType(1, 'Contract'),
  new MockUserType(2, 'Fulltime'),
];

export const MOCK_USERS: MockUser[] = [
  new MockUser(
    1,
    {
      profile: {
        dob: '31-06-1987',
        email: 'harry@email.com',
        entity: 1,
        expiryDate: '21-10-2021',
        firstName: 'Harry',
        lastName: 'Potter',
        language: 1,
        mobile: '5416728181',
        nickName: 'Harry',
        role: 1,
        sendPasswordOnEmail: false,
        timezone: 2,
        userId: 12371238712,
        userType: MockUserTypeId.FULLTIME,
      },
      additionalInfo: {
        attr1: '',
        attr2: '',
        attr3: '',
        attr4: '',
        country: 1,
        macId: '',
        startDate: '25-05-2021',
        ttl: '',
      },
      loginRestriction: {
        firstName: '',
        loginRestriction: false,
        userId: 12312312,
      },
    },
  ),

  new MockUser(
    2,
    {
      profile: {
        dob: '20-11-1979',
        email: 'zakir@email.com',
        entity: 1,
        expiryDate: '21-10-2021',
        firstName: 'Zakir',
        lastName: 'Hussain',
        language: 1,
        mobile: '5413338181',
        nickName: 'zakir',
        role: 1,
        sendPasswordOnEmail: false,
        timezone: 2,
        userId: 12371238661,
        userType: MockUserTypeId.CONTRACT,
      },
      additionalInfo: {
        attr1: '',
        attr2: '',
        attr3: '',
        attr4: '',
        country: 1,
        macId: '',
        startDate: '15-06-2021',
        ttl: '',
      },
      loginRestriction: {
        firstName: '',
        loginRestriction: false,
        userId: 15512312,
      },
    },
  ),
];
