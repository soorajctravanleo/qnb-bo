export enum MockUserType {
  FULLTIME,
  CONTRACT,
}

export interface MockUserProfileData {
  userId: number;
  nickName: string;
  firstName: string;
  lastName: string;
  dob: string;
  userType: MockUserType;
  entity: number;
  role: number;
  mobile: string;
  email: string;
  expiryDate: string;
  timezone: number;
  language: number;
  sendPasswordOnEmail: boolean;
}

export interface MockUserAdditionalInfoData {
  ttl: string;
  country: number;
  startDate: string;
  attr1: string;
  attr2: string;
  attr3: string;
  attr4: string;
  macId: string;
}

export interface MockUserLoginRestrictionData {
  userId: number;
  firstName: string;
  loginRestriction: boolean;
}

export interface MockUserData {
  profile: MockUserProfileData;
  additionalInfo: MockUserAdditionalInfoData;
  loginRestriction: MockUserLoginRestrictionData;
}

export class MockUser {
  constructor(
    public id: number,
    public data: MockUserData,
  ) { }
}
